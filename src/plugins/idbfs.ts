import { configureSingle, fs } from '@zenfs/core';
import { IndexedDB } from '@zenfs/dom';

export default defineNuxtPlugin(async () => {
  await configureSingle({ backend: IndexedDB });
  return {
    provide: {
      fs,
    },
  };
});
