export interface SendFood {
  run: (params: SendFood.Params) => Promise<SendFood.Response>
}

export namespace SendFood {
  export type Params = {
    title: string;
    image: string;
    price: number;
  }

  export type Response = {
    statusCode: number;
  }
}
