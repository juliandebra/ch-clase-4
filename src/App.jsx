import './App.css'
import Navbar from './Components/Navbar'
import Publicacion from './Components/Publicacion'

function App() {
  const publis = [
    {id: 1, titulo:'Primera publicacion', descripcion: 'Descripcion de la primera publicación' },
    {id: 2, titulo:'Segunda publicacion', descripcion: 'Hoy empieza la primera entrega' },
    {id: 3, titulo:'Tercera publicacion', descripcion: 'Que rapido se pasa el año' },
  ]



  return (
    <div className="App">
      <Navbar/>
      {publis.map((publi) => <Publicacion titulo={publi.titulo} descripcion={publi.descripcion}/>)}
    </div>
  )
}

export default App
