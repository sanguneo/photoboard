<script setup lang="ts">
const { toastOption, isVisible } = storeToRefs(useToastStore());

</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isVisible" class="toast-container">
        <div class="toast">
          <span>{{ toastOption.message }}</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.toast {
  max-width: 500px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
