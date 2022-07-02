type CreateItem<TKey, TValue> = (key: TKey) => TValue;

export default class FlyweightMap<TKey, TValue> {
  private readonly _map: Map<TKey, TValue>;
  private readonly _createItem: CreateItem<TKey, TValue>;

  constructor(createItem: CreateItem<TKey, TValue>) {
    this._map = new Map();
    this._createItem = createItem;
  }

  public create(key: TKey): TValue {
    const existingValue = this.getItem(key);
    if (existingValue) {
      return existingValue;
    }

    const value = this._createItem(key);
    this.setItem(key, value);

    return value;
  }

  public getItem(key: TKey): TValue | undefined {
    return this._map.get(key);
  }

  public setItem(key: TKey, value: TValue) {
    this._map.set(key, value);
  }

  public getMap() {
    return this._map;
  }
}
