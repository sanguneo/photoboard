import { openDB } from 'idb';

export default defineNuxtPlugin(async () => {
  const idb = await openDB('aegis-dx', 1, {
    upgrade(db) {
      const store = db.createObjectStore('aegis-dx', { keyPath: 'id' });
      store.createIndex('created', 'created');
      store.createIndex('filename', 'filename');
    },
  });
  return {
    provide: {
      idb,
    },
  };
});
