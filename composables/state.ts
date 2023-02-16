export const listContentsStore = (id: string) => {
  return new ListContents(id)
}

class ListContents {
  _dataState: any
  constructor(id: string) {
    this._dataState = useState<any>(id, () => [])
  }

  get state() {
    return readonly(this._dataState)
  }

  setList(data: any) {
    this._dataState = data.value.list
  }
}
