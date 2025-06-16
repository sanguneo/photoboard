import { defineStore } from 'pinia';
import type { IModal, TModalResult } from '@/types/modal.types.ts';

export const useModalStore = defineStore('modal', () => {

  const modalComponentObjects = ref<Array<IModal>>([]);

  const addModal = (modal: IModal) : void => {
    const findModal = modalComponentObjects.value.find(modalComponentObject => modalComponentObject.id === modal.id);

    if (!findModal) {
      modalComponentObjects.value.push(modal);
    }
  };

  const removeModal = (modal: IModal) : void => {
    const findModalIdx = modalComponentObjects.value.findIndex(modalComponentObject => modalComponentObject.id === modal.id);

    if (findModalIdx > -1) {
      modalComponentObjects.value.splice(findModalIdx, 1);
    }
  };

  const closeAllModal = () : void => {
    modalComponentObjects.value = [];
  };

  const openModal = (modal: IModal) : Promise<TModalResult> => {
    return new Promise<TModalResult>((resolve) => {
      const modalData: IModal = {
        id: `modal_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
        options: modal.options,
        component: shallowRef(modal.component),
        componentProps: modal.componentProps,
        onClose: (modalResult: TModalResult) => {
          removeModal(modalData);
          resolve(modalResult);
        },
      };
      addModal(modalData);
    });
  };

  return {
    modalComponentObjects,
    openModal,
    addModal,
    removeModal,
    closeAllModal,
  };
},
);
