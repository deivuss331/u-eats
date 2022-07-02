export type StorageType = 'localStorage' | 'sessionStorage';
export type StorageKey = string;

export default class BrowserStorageController<T> {
  public readonly type: StorageType;
  public readonly key: StorageKey;

  constructor(type: StorageType, key: StorageKey) {
    this.type = type;
    this.key = key;
  }

  getValue(): T | undefined {
    const jsonValue = window[this.type].getItem(this.key);

    return jsonValue ? JSON.parse(jsonValue) : undefined;
  }

  setValue(value: T) {
    window[this.type].setItem(this.key, JSON.stringify(value));
  }
}
