import useFeth from './hooks/useFeth'
import './App.css'
import LocationInfo from './Components/LocationInfo'
import CardResident from './Components/CardResident'

function App() {
  
  //obtener location random entre 1 y 126 location
  const randomLocation = Math.floor(Math.random() * (126 - 1) + 1)
  
  const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`

  const location = useFeth(URL)

  console.log(location)

  return (
    <div className="App">
      <h1>App Rick and Morthy</h1>
      <LocationInfo location={location} />
      <div>
        {
          location?.residents.map(url => (
            <CardResident 
              url={url} 
              key={url} 
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
