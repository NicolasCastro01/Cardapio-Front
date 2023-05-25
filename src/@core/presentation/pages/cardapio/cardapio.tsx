import { useState } from 'react';
import './cardapio.css'
import { useFoodData } from '~/@core/infra';
import { Card } from '~/@core/presentation/common';
import { CreateModal } from './components';

function Cardapio() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen]= useState(false);

  function handleOpenModal(){
    setIsModalOpen(!isModalOpen)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(food => (
        <Card
          key={food.id}
          price={food.price}
          title={food.title}
          image={food.image}
        />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default Cardapio
