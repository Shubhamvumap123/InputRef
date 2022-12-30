
import React from 'react'

const Input = ({type,value,onChange,placeholder},ref) => {

  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} ref={ref}/>
  )
}

const forwaredInput = React.forwardRef(Input)
export default forwaredInput