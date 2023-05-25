import './card.css'
import type { CardProps } from './interface';

export function Card({price, title, image}: CardProps){
  return (
    <div className="card">
      <img src={image} alt={`${title}-image`} />
      <h2>{title}</h2>
      <p><b>Valor:</b>{price}</p>
    </div>
  )
}
