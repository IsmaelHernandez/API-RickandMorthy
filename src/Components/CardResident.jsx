import React from 'react'
import useFeth from '../hooks/useFeth'

const CardResident = ({url}) => {
    //recibimos las url de la api
    const resident = useFeth(url)
    console.log(resident)
    
  return (
    <div>
        <article>
          <header>
            <img src={resident?.image} alt={`image of ${resident?.name}`} />
            <div>
              <div></div>
              <p>{resident?.status}</p>
            </div>
          </header>
          <div>
            <h3>{resident?.name}</h3>
            <ul>
              <li><span>Specie:</span>{resident?.species}</li>
              <li><span>Origin:</span>{resident?.origin.name}</li>
              <li><span>Episodes where appear:</span>{resident?.episode.length}</li>
            </ul>
          </div>
        </article>
    </div>
  )
}

export default CardResident