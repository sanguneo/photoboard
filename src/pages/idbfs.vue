<script setup lang="ts">
const fs = useFS();

const PAGE_SIZE:number = 5;

const filenames = ref<string[]>([]);
const images = ref<string[]>([]);
const currentPage = ref<number>(1);
const totalPages = computed(() => Math.ceil(filenames.value.length / PAGE_SIZE));
const paginatedFilenames = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filenames.value.slice(start, start + PAGE_SIZE);
});

async function loadPage() {
  const oldImages = [...images.value];
  const newImages = [];
  fs.clearURL(oldImages);

  for (const fname of paginatedFilenames.value) {
    const url = await fs.readFileAsURL(fname);
    newImages.push(url);
  }
  images.value = newImages;
}

const handleFileUpload = async (e: Event) => {
  const candidates:string[] = [];
  for (const file of ((e.target as HTMLInputElement)?.files || [])) {
    await fs.writeFile(`./${file.name}`, file);
    candidates.push(file.name);
  }
  filenames.value = [...candidates, ...filenames.value];
  loadPage();
};

watch(currentPage, loadPage);

onMounted(async () => {
  filenames.value = (await fs.readdir('./')).reverse();
  await loadPage();

});

</script>

<template>
  <div class="gallery">
    <h1>갤러리</h1>

    <!-- File Upload -->
    <input class="file-input" type="file" @change="handleFileUpload" >

    <!-- Image Gallery -->
    <div class="images">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Uploaded Image ' + (index + 1)"
        width="300"
        height="300"
        class="image-item"
      >
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
      <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgb(0 0 0 / 0.1);
}

.file-input {
  margin-bottom: 20px;
  padding: 10px 20px;
  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

.file-input:hover {
  transform: translateY(-2px);
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-item {
  border-radius: 12px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease-in-out;
}

.image-item:hover {
  transform: translateY(-5px);
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  transition: transform 0.2s ease;
}

.pagination button:hover {
  transform: translateY(-2px);
}
</style>
