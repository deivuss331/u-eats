import BrowserStorageController from 'utils/BrowserStorageController';
import type { StorageType, StorageKey } from 'utils/BrowserStorageController';

const STORAGE_TYPE: StorageType = 'localStorage';

export default <T>(key: StorageKey) => new BrowserStorageController<T>(STORAGE_TYPE, key);
