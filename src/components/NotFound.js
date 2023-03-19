import React from 'react'
import Footer from '../components/Footer'
import pageNotFound from '../assets/icons/Notfound.svg'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const router = useNavigate()
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className="mt-24 text-center">
        <h1 className='text-lg tracking-[4px] font-normal'>COMING SOON</h1>
        <img src={pageNotFound} className='block mx-auto mt-10' alt="" />
        <p className='mx-auto w-2/3 mt-10'>Oops sorry feature not finished, may wait a while</p>
      </div>
      <button className='btn-primary mt-10 mb-14 flex items-center gap-2' onClick={() => router(`/`)}><BiArrowBack className='text-xl'/>HOME PAGE</button>
      <Footer/>
    </div>
  )
}

export default NotFound