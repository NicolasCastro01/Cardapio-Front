import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRemoteSendFood } from "~/@core/main/factories";
import type { SendFood } from "~/@core/domain/usecases";

async function postData(data: SendFood.Params): Promise<void>{
  const response = makeRemoteSendFood().run(data)
  return response;
}

export function useFoodDataMutate(){
  const queryClient = useQueryClient()
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['food-data'])
    }
  })

  return mutate;
}
