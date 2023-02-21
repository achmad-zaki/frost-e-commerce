import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text, className, navigation}) => {
  const router = useNavigate()
  return (
    <button className={`${className}`} onClick={() => router(`${navigation}`)}>{text}</button>
  )
}

export default Button