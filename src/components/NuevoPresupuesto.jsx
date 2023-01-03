import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!Number(presupuesto) || Number(presupuesto) < 0) return setMensaje('Presupuesto Invalido')

    setMensaje('')
    setIsValidPresupuesto(true)
  } 
  
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form 
        className='formulario'
        onSubmit={handlePresupuesto}
      >
        <div className="campo">
          <label htmlFor="presupuesto">Definir Presupuesto</label>
          <input 
            type="number" 
            name="presupuesto" 
            id="presupuesto" 
            placeholder='Agrega tu presupuesto'
            className='nuevo-presupuesto'
            value={presupuesto === 0 ? '' : presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input 
          type="submit" 
          value="Agregar" 
        />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto