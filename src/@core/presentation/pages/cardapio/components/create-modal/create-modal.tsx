import { useEffect, useState } from "react";
import "./modal.css"
import { useFoodDataMutate } from "~/@core/infra";
import type { SendFood } from "~/@core/domain/usecases";
import type { ModalProps } from "./interface";
import { InputTag } from "./components/input-label";

export function CreateModal({ closeModal }: ModalProps){
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)
  const { mutate, isSuccess, isLoading } = useFoodDataMutate()

  function submit(){
    const foodData: SendFood.Params = {
      title,
      price,
      image
    }

    mutate(foodData)
  }

  useEffect(()=>{
    if(!isSuccess) return;

    closeModal()
  },[isSuccess, closeModal])

  return(
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <InputTag label="title" value={title} updateValue={setTitle}/>
          <InputTag label="price" value={price} updateValue={setPrice}/>
          <InputTag label="image" value={image} updateValue={setImage}/>
        </form>
        <button onClick={submit} className="btn-secondary">{isLoading ? 'Postando...' : 'Postar'}</button>
      </div>
    </div>
  )
}
