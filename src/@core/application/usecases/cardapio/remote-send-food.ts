import { HttpStatusCodeEnum } from "~/@core/domain/protocols";
import type { SendFood } from "~/@core/domain/usecases";
import { axios } from "~/@core/infra";

export class RemoteSendFood implements SendFood {
  constructor(private readonly url: string){}

  async run(params: SendFood.Params): Promise<SendFood.Response> {
    try {
      const response = await axios.post(this.url, params)

      return { statusCode: response.status }
    } catch (error) {
      throw new Error(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest])
    }
  }
}
