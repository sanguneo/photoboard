<script setup lang="ts">
const store = useToastStore();

const { toastMessage, toastOption, isVisible } = storeToRefs(store);
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isVisible" class="toast-container" :class="toastOption.position">
        <div v-if="toastOption.type === 'validation'" class="toast-validation">
          <span class="icon">
            <img src="@/assets/images/error.svg" alt="경고 아이콘" />
          </span>
          <span>{{ toastMessage }}</span>
        </div>
        <div v-else class="toast-message">
          <span v-html="toastMessage" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
