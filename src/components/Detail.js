import React, { useState } from 'react'
import Resize from '../assets/icons/Resize.svg'
import AddBasket from './AddBasket'
import Variation from './Variation'
import Bleach from '../assets/icons/Do Not Bleach.svg'
import Tumble from '../assets/icons/Do Not Tumble Dry.svg'
import Wash from '../assets/icons/Do Not Wash.svg'
import Temperature from '../assets/icons/Iron Low Temperature.svg'
import Shipping from '../assets/icons/Shipping.svg'
import Tag from '../assets/icons/Tag.svg'
import Refresh from '../assets/icons/Refresh.svg'
import { SlArrowDown } from 'react-icons/sl'
import Footer from '../components/Footer'

const Detail = ({title, price, img}) => {
  const [shipping, setShipping] = useState(false)
  const [codPolicy, setCodPolicy] = useState(false)
  const [returnCod, setReturnCod] = useState(false)
  return (
    <div className='h-[250vh] pt-20 md:w-1/2 md:mx-auto'>
      <div className="p-5 relative">
        <img src={img} alt="" />
        <button className="absolute bg-[#9E9E9E] hover:bg-[#727272] transition duration-300 right-4 bottom-40 rounded-full p-2">
          <img src={Resize} alt="" />
        </button>
        <div className="mt-3">
          <Variation
            title={title}
            price={price}
          />
        </div>
      </div>
      <AddBasket/>
      <div className="p-5">
        <div className="mt-2">
          <h1 className='tracking-[2px] text-sm'>MATERIALS</h1>
          <p className='text-[#555555] text-sm mt-2 leading-6'>Rise up and transform your fleece wardrobe with strong cosy vibes. This Phoenix Fleece sweatshirt's oversized fit 
            keeps you relaxed and comfy
          </p>
        </div>
        <div className="mt-5">
          <h1 className='tracking-[2px] text-sm'>CARE</h1>
          <p className='text-[#555555] text-sm mt-2 leading-6'>Rise up and transform your fleece wardrobe with strong cosy vibes. This Phoenix Fleece sweatshirt's oversized fit keeps you relaxed and comfy while taller ribbing at the hem and cuffs 
            adds support and a bold look, helping you stand out.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-3">
            <img src={Bleach} alt="" />
            <p className='text-sm text-[#555555]'>Do not use bleach</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <img src={Tumble} alt="" />
            <p className='text-sm text-[#555555]'>Do not tumble dry</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <img src={Wash} alt="" />
            <p className='text-sm text-[#555555]'>Dry clean with tetrachloroethylene</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={Temperature} alt="" />
            <p className='text-sm text-[#555555]'>Iron at a maximum of 110ºC/230ºF</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className='tracking-[2px] text-sm'>CARE</h1>
          {/* ongkir */}
          <div className='mt-5 flex items-start gap-3'>
            <img src={Shipping} alt="" />
            <div className="flex flex-col w-full">
              <button className='flex items-center w-full' onClick={() => setShipping(!shipping)}>
                <h1 className='text-sm'>Free Flat Rate Shipping</h1>
                <SlArrowDown className={`ml-auto transition-all duration-300 text-sm text-[#14142B] ${shipping ? 'rotate-0' : 'rotate-180'}`}/>
              </button>
              {shipping &&
                <div className="mt-3">
                  <p className='text-sm text-[#555555]'>Estimated to be delivered on 
                    09/11/2021 - 12/11/2021.
                  </p>
                </div>
              }
              <div className="border-b-2 mt-3 border-b-[#DDDDDD]"></div>
            </div>
          </div>
          {/* end ongkir */}
          {/* cod policy */}
          <div className='mt-5 flex items-start gap-3'>
            <img src={Tag} alt="" />
            <div className="flex flex-col w-full">
              <button className='flex items-center w-full' onClick={() => setCodPolicy(!codPolicy)}>
                <h1 className='text-sm'>COD Policy</h1>
                <SlArrowDown className={`ml-auto transition-all duration-300 text-sm text-[#14142B] ${codPolicy ? 'rotate-0' : 'rotate-180'}`}/>
              </button>
              {codPolicy &&
                <div className="mt-3">
                  <p className='text-sm text-[#555555]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quibusdam, fuga?
                  </p>
                </div>
              }
              <div className="border-b-2 mt-3 border-b-[#DDDDDD]"></div>
            </div>
          </div>
          {/* end cod policy */}
          {/* return cod */}
          <div className='mt-5 flex items-start gap-3'>
            <img src={Refresh} alt="" />
            <div className="flex flex-col w-full">
              <button className='flex items-center w-full' onClick={() => setReturnCod(!returnCod)}>
                <h1 className='text-sm'>Return Policy</h1>
                <SlArrowDown className={`ml-auto transition-all duration-300 text-sm text-[#14142B] ${returnCod ? 'rotate-0' : 'rotate-180'}`}/>
              </button>
              {returnCod &&
                <div className="mt-3">
                  <p className='text-sm text-[#555555]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et consectetur, inventore nobis 
                    labore sunt harum?
                  </p>
                </div>
              }
              <div className="border-b-2 mt-3 border-b-[#DDDDDD]"></div>
            </div>
          </div>
          {/* end return cod */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Detail