import React from 'react'
import useFeth from '../hooks/useFeth'

const CardResident = ({url}) => {
    //recibimos las url de la api
    const resident = useFeth(url)
    console.log(resident)
    
  return (
    <div className='container'>
      <section className='person'>
			<div className='person-header'>
				<div className='state'>
					<span className={resident?.status}></span>
					<h4>{resident?.status}</h4>
				</div>
			</div>

			<div className='person-body'>
				<figure>
					<img src={resident?.image} alt={`image of ${resident?.name}`} />
				</figure>

				<h2>{resident?.name}</h2>
				<div className='card-list'>
					<ul>
						<li><span>Specie:</span>{resident?.species}</li>
						<li><span>Origin:</span>{resident?.origin.name}</li>
						<li><span>Episodes where appear:</span>{resident?.episode.length}</li>
					</ul>
				</div>
			</div>
		</section>
    </div>
  )
}

export default CardResident