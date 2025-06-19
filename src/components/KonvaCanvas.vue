<script setup lang="ts">
interface KonvaCanvasProps {
  imageSrc?: string;
  width?: number;
  height?: number;
  photoInfoList: { title: string; content: string }[];
}

const props = defineProps<KonvaCanvasProps>();
const isDragging = ref(false);

// 이미지 로딩
const image = ref<HTMLImageElement | null>(null);

const loadImage = async () => {
  if (!props.imageSrc) return;

  const img = new Image();
  img.onload = () => {
    image.value = img;
  };

  img.src = props.imageSrc;
};

// 이미지 변경 감지
watch(() => props.imageSrc, loadImage, { immediate: true });

// Stage 크기 설정
const stageSize = computed(() => ({
  width: props.width || window.innerWidth,
  height: props.height || window.innerHeight,
}));

// 텍스트 그룹의 초기 위치
const groupPos = ref({
  x: 100,
  y: 100,
});

// 드래그 이벤트 핸들러
const handleDragStart = () => {
  isDragging.value = true;
};

const handleDragEnd = () => {
  isDragging.value = false;
};
</script>

<template>
  <v-stage :config="stageSize">
    <v-layer>
      <!-- 이미지 -->
      <v-image
        v-if="image"
        :config="{
          image: image,
          width: stageSize.width,
          height: stageSize.height,
        }"
      />

      <!-- 텍스트 그룹 -->
      <v-group
        v-if="photoInfoList.length > 0"
        :config="{
          x: groupPos.x,
          y: groupPos.y,
          draggable: true,
        }"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
      >
        <!-- 배경 사각형 -->
        <v-rect
          :config="{
            width: 200,
            height: photoInfoList?.length * 20 + 30,
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 0.1,
            cornerRadius: 10,
          }"
        />

        <!-- 텍스트 -->
        <v-text
          v-for="(text, index) in photoInfoList"
          :key="index"
          :config="{
            text: `${text.title}: ${text.content}`,
            x: 20,
            y: 20 + index * 20,
            fontSize: 14,
            fontFamily: 'Arial',
            width: 200,
            align: 'left',
            fill: '#000',
          }"
        />
      </v-group>
    </v-layer>
  </v-stage>
</template>

<style lang="scss" scoped></style>
