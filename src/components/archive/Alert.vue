<script setup lang="ts">

const alertStore = useAlertStore();
const modalStore = useModalStore();

const { isVisible, type, alertOptions } = storeToRefs(alertStore);
const { confirm, cancel } = alertStore;

const modals = computed(() => modalStore.modalComponentObjects);

</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="isVisible" class="modal-dim" :style="{'z-index' : modals.length > 0 ? 11 : 10}">
        <div class="confirm">
          <div class="confirm__header">
            <h3> {{ alertOptions.title }} </h3>
          </div>
          <div class="confirm__contents">
            <p class="content">
              {{ alertOptions.content }}
            </p>
            <p v-if="alertOptions.subContent" class="sub-content">
              {{ alertOptions.subContent }}
            </p>
          </div>
          <div class="confirm__button">
            <button v-if="type === 'confirm'" type="button" class="button button-m button-line" @click="cancel">
              {{ alertOptions.cancelText }}
            </button>
            <button type="button" class="button button-m button-fill" @click="confirm">
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
