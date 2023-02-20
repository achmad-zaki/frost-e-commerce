import React from 'react'
import Line from '../assets/icons/line.svg'

const Title = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-lg font-normal tracking-[4px] uppercase">{title}</h1>
        <img src={Line} alt="" />
    </div>
  )
}

export default Title