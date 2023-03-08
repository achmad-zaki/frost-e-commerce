import React from 'react'
import CategoryDetail from '../components/CategoryDetail'
import Footer from '../components/Footer'
import { shirt } from '../Data'

const Category = () => {
  return (
    <>
        <div className="container mx-auto px-4">
            <CategoryDetail shirt={shirt}/>
        </div>
        <Footer/>
    </>
  )
}

export default Category