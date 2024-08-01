import React, { useState, useEffect } from 'react'
import { useGlobalStates } from '../components/utils/Global.Context'


const Card = ({
  name,
  username,
  id,
  addOdontologo,
  odontologo,
  deleteOdontologo
}) => {
  const { destacadoDispatch, addDestacado, deleteDestacad } = useGlobalStates()
  const [isAdded, setIsAdded] = useState(false)

  const handleToggleDestacado = () => {
    if (isAdded) {
      deleteOdontologo(odontologo)
      setIsAdded(false)
    } else {
      addOdontologo(odontologo)
      setIsAdded(true)
    }
  }

  return (
    <div className='card'>
      <img
        className='imgdoctor'
        src='\images\vector.png'
        alt='foto odontologo'
      />
      <h3>{name}</h3>
      <h4>{username}</h4>
      <a href={'/detalle/' + id}>
        <img
          className='info-icon'
          src='/images/info.png'
          alt='información'
        />
      </a>
      <button className='destacadoButton' onClick={handleToggleDestacado}>
        {!isAdded ? ' Agregar  🤍' : 'Eliminar  💙'}
      </button>
    </div>
  )
}

export default Card