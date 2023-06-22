import React from 'react'
import { useParams } from 'react-router-dom'

function Userview() {
  const {id} = useParams()

  return (
    <h1>userview - {id}</h1>
  )
}

export default Userview