import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Search from "../search/Search";
import Weather from "../weather/Weather";
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState('');
  const URL =
    `https://api.openweathermap.org/data/2.5/weather?q=` 
    + city +
    `&units=metric&appid=5e8f0afbfabeebdf641986448c1eb261`;

  const [temperature, setTemperature] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [name, setName] = useState('');
  const [region, setRegion] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [cloudy, setCloudy] = useState();
  const [gusts, setGusts] = useState();
  const [visibility, setVisibility] = useState();
  const [humidity, setHumidity] = useState();
  const [pressure, setPressure] = useState();


  

  const fetchData = async () => {
    const result = await fetch(URL);
    result.json().then((json) => {
      setTemperature(Math.floor(json.main.temp));
      setFeelsLike(Math.floor(json.main.feels_like));
      setName(json.name);
      setRegion(json.sys.country);
      setWindSpeed(json.wind.speed);
      setCloudy(json.clouds.all);
      setGusts(json.wind.gust);
      setVisibility(json.visibility);
      setHumidity(json.main.humidity);
      setPressure(json.main.pressure);
      console.log(json);
    });
  };

  const weather = {
    temperature,
    feelsLike,
    name,
    region,
    windSpeed,
    cloudy,
    gusts,
    visibility,
    humidity,
    pressure
  }

  return (
    <div className="App">
      <Header />
      <Search city={city} setCity={setCity} fetchData={fetchData} />
      <Weather
        weather={weather}
      />
      <Footer />
    </div>
  );
}

export default App;
