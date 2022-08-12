import { useState, useEffect } from 'react'
import axios from 'axios'


const useFeth = url => {
  //estado para renderizar la inf
  const [response, setResponse] = useState()
  //para la inf de la api
  useEffect(() => {
    //axios para hacer la paticion a la api
    axios.get(url)
      //metodos de las promesas una obtiene la res la otra un error al hacer la peticion
     .then(res => setResponse(res.data))
     .catch(err => console.log(err))
  }, [])

  //retornar el estado
  return response

}

export default useFeth