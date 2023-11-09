import { useState } from 'react'

const Publicacion = ({titulo, descripcion}) => {
  const [contador, setContador] = useState(0)


  const handleLike = () => {
    setContador(contador += 1)
  }
  return (
    <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <button onClick={handleLike}>{contador} Like👍</button>
    </div>
  )
}

export default Publicacion