import { HttpStatusCodeEnum } from "~/@core/domain/protocols";
import type { LoadCardapio } from "~/@core/domain/usecases";
import { axios } from "~/@core/infra";

export class RemoteLoadCardapio implements LoadCardapio {
  constructor(private readonly url: string){}

  async run(): Promise<LoadCardapio.Response>{
    try{
      const httpResponse = await axios.get(this.url)
      const response = httpResponse.data as LoadCardapio.Response

      return response
    } catch {
      throw new Error(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest])
    }
  }
}
