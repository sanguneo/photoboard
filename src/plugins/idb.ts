import { openDB } from 'idb';

export default defineNuxtPlugin(async () => {
  const idb = await openDB('aegis-dx', 1, {
    upgrade(db) {
      db.createObjectStore('aegis-dx');
    },
  });
  return {
    provide: {
      idb,
    },
  };
});
