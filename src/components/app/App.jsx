import './App.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Search from '../search/Search'
import Weather from '../weather/Weather'
import {useEffect, useState} from 'react'

function App() {
  const [city, setCity] = useState()
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&units=metric&appid=5e8f0afbfabeebdf641986448c1eb261`



  const [temperature, setTemperature] = useState()
  const [feelsLike, setFeelsLike] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        setTemperature(json.main.temp)
        setFeelsLike(json.main.feels_like)
        console.log(json)
      })
    }
    fetchData()
  }, [])

  console.log(city)

  return (
    <div className='App'>
        <Header />
        <Search setCity={setCity} city={city}/>
        <Weather temperature={temperature} feelsLike={feelsLike}/>
        <Footer />
    </div>
  )
}

export default App
