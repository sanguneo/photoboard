<script setup lang="ts">
const alertStore = useAlertStore();
const { isVisible, type, alertOptions } = storeToRefs(alertStore);
const { confirm, cancel } = alertStore;
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isVisible" class="modal-dim">
        <div class="modal modal-confirm">
          <div class="modal-body">
            <p class="content">
              {{ alertOptions.content }}
            </p>
          </div>
          <div class="modal-foot">
            <button v-if="type === 'confirm'" type="button" class="button primary-line" @click="cancel">
              {{ alertOptions.cancelText }}
            </button>
            <button type="button" class="button primary-fill" @click="confirm">
              {{ alertOptions.confirmText }}
            </button>
          </div>
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
