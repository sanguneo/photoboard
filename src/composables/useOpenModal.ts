import * as OPTIONS from '@/shared/constants/modal.constants.ts';
import * as MODALS from '@/components/modal/index.ts';
import { FOLDER_ALIGN_OPTIONS, FILE_ALIGN_OPTIONS } from '@/shared/constants/radio.constant.ts';

export const useOpenModal = () => {
  const { openModal } = useModalStore();

  const openFloderAlignModal = async (selectOption: string) => {
    return await openModal({
      options: OPTIONS.ALIGN,
      component: MODALS.AlignModal,
      componentProps: {
        options: FOLDER_ALIGN_OPTIONS,
        selectedValue: selectOption,
      },
    });
  };

  const openFileAlignModal = async (selectOption: string) => {
    return await openModal({
      options: OPTIONS.ALIGN,
      component: MODALS.AlignModal,
      componentProps: {
        options: FILE_ALIGN_OPTIONS,
        selectedValue: selectOption,
      },
    });
  };

  const openFileOptionModal = async (title?: string) => {
    return await openModal({
      options: {
        ...OPTIONS.FILE_OPTION,
        title: title || OPTIONS.FILE_OPTION.title,
      },
      component: MODALS.FileOptionModal,
    });
  };

  const openFileUploadModal = async () => {
    return await openModal({
      options: OPTIONS.FILE_UPLOAD,
      component: MODALS.FileUploadModal,
    });
  };

  const openFileNameChangeModal = async () => {
    return await openModal({
      options: OPTIONS.NAME_CHANGE,
      component: MODALS.NameChangeModal,
    });
  };

  const openPhotoSelectModal = async () => {
    return await openModal({
      options: OPTIONS.PHOTO_SELECT,
      component: MODALS.PhotoSelectModal,
    });
  };

  const openUploadCompleteModal = async () => {
    return await openModal({
      options: OPTIONS.UPLOAD_COMPLETE,
      component: MODALS.UploadCompleteModal,
    });
  };

  const openUploadWaitModal = async () => {
    return await openModal({
      options: OPTIONS.UPLOAD_WAIT,
      component: MODALS.UploadWaitModal,
    });
  };

  return {
    openFloderAlignModal,
    openFileAlignModal,
    openFileOptionModal,
    openFileUploadModal,
    openFileNameChangeModal,
    openPhotoSelectModal,
    openUploadCompleteModal,
    openUploadWaitModal,
  };
};
