import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import { shirt } from '../Data'

const ProductDetail = () => {
  const {id} = useParams()
  return (
    <div>
      {shirt.filter((item) => item.id == id)
      .map((item) => (
        <Detail
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default ProductDetail