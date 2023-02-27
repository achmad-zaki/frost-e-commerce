import React from 'react'

const Pagination = () => {
  return (
    <ul className='flex items-center justify-center'>
        <li className='space-x-5'>
            <a href="/" className='px-4 py-3 bg-[#333333] text-white'>1</a>
            <a href="/" className='px-4 py-3 bg-[#F3F3F3] text-[#333333]'>2</a>
            <a href="/" className='px-4 py-3 bg-[#F3F3F3] text-[#333333]'>3</a>
            <a href="/" className='px-4 py-3 bg-[#F3F3F3] text-[#333333]'>4</a>
            <a href="/" className='px-4 py-3 bg-[#F3F3F3] text-[#333333]'>5</a>
        </li>
    </ul>
  )
}

export default Pagination