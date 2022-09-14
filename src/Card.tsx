import { ReactPropTypes, useState } from 'react'
import cardStyle from './assets/style/card.module.css'

interface CardProps {
  background: string
  id: number
}

function Card({ background, id }: CardProps) {
  const [isShow, setIsShow] = useState(false)
  if (isShow) {
    return (
      <>
        {
          isShow && (
            <div className={cardStyle.card} style={{ backgroundImage: `url(${background})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            </div>
          )
        }
      </>
    )
  } else {
    return (<div className={cardStyle.card} onClick={() => setIsShow(true)} >
    </div>)
  }
}

export default Card
