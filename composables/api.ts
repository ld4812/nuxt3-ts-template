export class Api {
  private readonly config: any
  constructor() {
    this.config = useRuntimeConfig()
  }

  public getUrl(): string {
    return `${this.config.apiEndpoint}/rcms-api/15/contents/list`
  }
}
