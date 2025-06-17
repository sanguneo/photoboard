import { openDB } from 'idb';

export default defineNuxtPlugin(async () => {
  const idb = await openDB('ifs', 1, {
    upgrade(db) {
      db.createObjectStore('tmp');
    },
  });
  return {
    provide: {
      idb,
    },
  };
});
