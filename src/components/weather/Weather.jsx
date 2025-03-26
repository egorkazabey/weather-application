import "./Weather.scss";
import "../../index.scss";

const Weather = ({ weather, city, cityLength }) => {
  return (
    <main>
      <div className="container">
        {cityLength > 1 ? (
          <>
            <div className="card">
              <div className="h__line">
                <h1 className="city">
                  {weather.name} ({weather.region})
                </h1>
                <p className="date">Data as of {new Date().getHours()}:00</p>
              </div>
            </div>
            <div className="temperature">
              <div className="temperature__line">
                <span>{weather.temperature}℃</span>
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    weather.weatherIcon +
                    ".png"
                  }
                  alt="weather"
                  className="weather"
                />
              </div>
              <p className="feels">
                Feels like {weather.feelsLike}℃, {weather.weatherDescription}
              </p>
            </div>
            <div className="info">
              <div className="info__line">
                <div className="info__element">
                  <div className="element__line">
                    <h5>Wind speed</h5>
                    <p className="element__value">{weather.windSpeed} m/s</p>
                  </div>
                  <hr />
                </div>
                <div className="info__element">
                  <div className="element__line">
                    <h5>Cloudiness</h5>
                    <p className="element__value">{weather.cloudy} %</p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="info__line">
                <div className="info__element">
                  <div className="element__line">
                    <h5>Gusts of wind</h5>
                    <p className="element__value">{weather.gusts} m/s</p>
                  </div>
                  <hr />
                </div>
                <div className="info__element">
                  <div className="element__line">
                    <h5>Visibility</h5>
                    <p className="element__value">{weather.visibility} m</p>
                  </div>
                  <hr />
                </div>
              </div>
              <div className="info__line">
                <div className="info__element">
                  <div className="element__line">
                    <h5>Humidity</h5>
                    <p className="element__value">{weather.humidity} %</p>
                  </div>
                  <hr />
                </div>
                <div className="info__element">
                  <div className="element__line">
                    <h5>Pressure</h5>
                    <p className="element__value">{weather.pressure} hPa</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2>Enter city or region</h2>
        )}
      </div>
    </main>
  );
};

export default Weather;