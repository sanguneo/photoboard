/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A memory-backed implementation of the Web Storage API.
 *
 * @copyright Copyright 2016 by Stijn de Witt and contributors. Some rights reserved.
 * @license Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).
 */

declare module 'memorystorage' {
  /**
   * @description Creates a new MemoryStorage object implementing the Web Storage API using memory.
   *
   * If no arguments are given, the created memory storage object will read from and write to the
   * `global` memory storage. If a string argument is given, the new storage object
   * will read from and write to its own segment of memory. Any data written to such a memory
   * storage object will only show up in other memory storage objects that have been created with
   * the same id. This data will not show up in the `global` memory space. As such it
   * is recommended to always construct a memory storage object with a unique string id as argument.
   *
   * @param id Optional string argument used to isolate this memory storage object from others.
   */
  function MemoryStorage(id?: string): MemoryStorage;

  interface MemoryStorage {
    /**
     * @description The number of key/value pairs currently present in the storage.
     */
    readonly length: number;

    /**
     * @description The identifier used to isolate this memory storage object from others.
     */
    readonly id: string;

    /**
     * @description Removes all key/value pairs from the storage.
     */
    clear(): void;

    /**
     * @description Retrieves the value associated with the given key.
     * @param key The key to retrieve the value for.
     * @returns The value associated with the key, or null if the key does not exist.
     */
    getItem<T=any>(key: string): T;

    /**
     * @description Returns the name of the key at the specified index.
     * @param index The zero-based index of the key to retrieve.
     * @returns The name of the key at the specified index, or null if the index is out of range.
     */
    key(index: number): string | null;

    /**
     * @description Removes the key/value pair with the given key.
     * @param key The key of the item to remove.
     */
    removeItem(key: string): void;

    /**
     * @description Sets the value for the given key.
     * @param key The key to set the value for.
     * @param value The value to set.
     */
    setItem<T=any>(key: string, value: T): void;

    /**
     * @description Allows direct access to storage values using bracket notation.
     * e.g., storage['myKey'] instead of storage.getItem('myKey')
     */
    [key: string]: any;
  }

  // Make the default export and the named export the same
  export default MemoryStorage;
}
