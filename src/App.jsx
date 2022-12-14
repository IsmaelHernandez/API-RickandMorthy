import useFeth from './hooks/useFeth'
import './App.css'
import LocationInfo from './Components/LocationInfo'
import CardResident from './Components/CardResident'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Logo from './assets/logo.png'

function App() {
  const [location, setLocation] = useState()
  //estado para guardar la inf de busqueda
  //busqueda por input
  const [searchInput, setSearchInput] = useState('')
  //obtener location random entre 1 y 126 location
  //const randomLocation = Math.floor(Math.random() * (126 - 1) + 1)

  //const location = useFeth(URL)
  console.log(location)

  useEffect(() => {
    let numberLocation

    if(searchInput === ''){
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    }else{
      numberLocation = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchInput])
  

  const handleSubmit = e => {
    //para evitar que la pag se cargue de new
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  console.log(searchInput)

  return (
    <div className="App">
      <figure className='logo'>
				<img src={Logo} alt='Logo de Rick & Morty' />
			</figure>
      <div className='logo'>
        <LocationInfo location={location} />
      </div>
      <div className='logo'>
        <form onSubmit={handleSubmit}>
          <input className='header-form-input' id='search' type="text" />
          <button className='header-form-btn'>Search</button>
        </form>
      </div>
      
      <section className='list-person'>
        {
          location?.residents.map(url => (
            <CardResident 
              url={url} 
              key={url} 
            />
          ))
        }
      </section>

    </div>
  )
}

export default App
