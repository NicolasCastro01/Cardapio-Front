import { RemoteSendFood } from './remote-send-food';
import { axios } from '~/@core/infra';
import { HttpStatusCodeEnum } from "~/@core/domain/protocols";
import type { SendFood } from '~/@core/domain/usecases';

const food: SendFood.Params = {
  title: 'teste',
  image: 'http://teste.com.br/img/teste',
  price: 50
}
const url = 'http://teste.com/food/create'

function makeSut(){
  const sut: SendFood = new RemoteSendFood(url)

  return { sut }
}

describe('Remote load cardapio', () => {
  it('should not return the response data on success', async () => {
    jest.spyOn(axios, 'post').mockResolvedValueOnce({
      status: 200
    });

    const { sut } = makeSut()

    await expect(sut.run(food)).resolves.toEqual({statusCode: 200})
  });

  it('should throw an error with the correct status code on failure', async () => {
    const { sut } = makeSut()
    
    jest.spyOn(axios, 'post').mockRejectedValueOnce(new Error(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest]));

    await expect(sut.run(food)).rejects.toThrowError(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest]);
  });
})
