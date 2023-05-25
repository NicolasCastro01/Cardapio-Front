import { useQuery } from "@tanstack/react-query";
import type { LoadCardapio } from "~/@core/domain/usecases";
import { makeRemoteLoadCardapio } from "~/@core/main/factories";

async function fetchData(): Promise<LoadCardapio.Response>{
  const response = makeRemoteLoadCardapio().run()

  return response;
}

export function useFoodData(){
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data
  };
}
