import { RemoteLoadCardapio } from "~/@core/application/usecases";
import type { LoadCardapio } from "~/@core/domain/usecases";
import { API_URL } from "~/@core/infra";

export function makeRemoteLoadCardapio(): LoadCardapio{
  return new RemoteLoadCardapio(`${API_URL}/food/getAll`)
}
