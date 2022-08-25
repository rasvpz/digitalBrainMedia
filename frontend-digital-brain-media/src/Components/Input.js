import React from 'react'

const Input = (props) => {
  return (
    <>
    	<input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} required />
    </>
  )
}

export default Input