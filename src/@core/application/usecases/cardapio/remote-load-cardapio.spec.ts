import { axios } from '~/@core/infra';
import { HttpStatusCodeEnum } from "~/@core/domain/protocols";
import { RemoteLoadCardapio } from './remote-load-cardapio';
import type { LoadCardapio } from '~/@core/domain/usecases';

const foods: LoadCardapio.Response = [
  {
    id: 1,
    title: 'teste',
    image: 'http://teste.com.br/img/teste',
    price: 50
  },
  {
    id: 2,
    title: 'teste1',
    image: 'http://teste.com.br/img/teste1',
    price: 55
  }
]
const url = 'http://teste.com/food/getAll'

function makeSut(){
  const sut: LoadCardapio = new RemoteLoadCardapio(url)

  return { sut }
}

describe('Remote load cardapio', () => {
  it('should call axios with correct url', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');

    const {sut} = makeSut()
    await sut.run()
    

    expect(axiosGetSpy).toHaveBeenCalledWith(url);
  })

  it('should return the response data on success', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: foods });

    const { sut } = makeSut()
    const result = await sut.run();

    expect(result).toEqual(foods);
  });

  it('should throw an error with the correct status code on failure', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({});

    const { sut } = makeSut()

    await expect(sut.run()).rejects.toThrowError(HttpStatusCodeEnum[HttpStatusCodeEnum.badRequest]);
  });
})
