import React from 'react'
import Footer from './Footer'
import Title from './Title'
import Contact from '../assets/icons/Contact.svg'
import Mail from '../assets/icons/Mail.svg'
import Twitter from '../assets/icons/Twitter.svg'

const ContactUs = () => {
  return (
    <div className='mt-24'>
        <Title title='CONTACT US'/>
        {/* contact */}
        <div className='w-11/12 mx-auto md:w-1/2 mt-20 grid place-items-center'>
            <img src={Contact} className='block mx-auto mb-5' alt="" />
            <p className='text-[16px]'>Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, 
                please call us.
            </p>
            <button className='btn-primary mt-8'>CHAT WITH US</button>
        </div>
        {/* mail */}
        <div className="w-11/12 mx-auto md:w-1/2 grid place-items-center mt-20">
            <img src={Mail} className='block mx-auto mb-5' alt="" />
            <p className='text-[16px]'>You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. 
                Text messaging may not be available via all carriers.
            </p>
            <button className='btn-primary mt-8'>TEXt US</button>
        </div>
        {/* twitter */}
        <div className="w-11/12 mx-auto md:w-1/2 grid place-items-center mt-20 mb-10">
            <img src={Twitter} className='block mx-auto mb-5' alt="" />
            <p className='text-[16px]'>To send us a private or direct message, like @Open Fashion on    Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!
            </p>
            <button className='btn-primary mt-8'>TEXt US</button>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs