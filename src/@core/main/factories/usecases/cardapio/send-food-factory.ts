import { RemoteSendFood } from "~/@core/application/usecases";
import type { SendFood } from "~/@core/domain/usecases";
import { API_URL } from "~/@core/infra";

export function makeRemoteSendFood(): SendFood{
  return new RemoteSendFood(`${API_URL}/food/create`)
}
