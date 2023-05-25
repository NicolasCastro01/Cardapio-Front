export interface LoadCardapio {
  run: () => Promise<LoadCardapio.Response>
}

export namespace LoadCardapio {
  export type Response = {
    id: number;
    title: string;
    image: string;
    price: number;
  }[]

  export type ApiResponse = {
    id: number;
    title: string;
    image: string;
    price: number;
  }[]
}
