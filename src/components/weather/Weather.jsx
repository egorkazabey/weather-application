import './Weather.scss'
import '../../index.scss'
import image from '../../images/weather/sunny.png'

const Weather = ({weather}) => {


    return (
        <main>
            <div className="container">
                <div className="card">
                    <div className="h__line">
                        <h1 className="city">{weather.name} ({weather.region})</h1>
                        <p className="date">Данные на {new Date().getHours()}:00</p>
                    </div>
                </div>
                <div className="temperature">
                    <div className="temperature__line">
                        <span>{weather.temperature}℃</span>
                        <img src={image} alt="weather" />
                    </div>
                    <p className="feels">Слегка облачно, ощущается как {weather.feelsLike}℃</p>
                </div>
                <div className="info">
                    <div className="info__line">
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Wind speed</h5>
                                <p className="element__value">{weather.windSpeed} м/c</p>
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
                                <p className="element__value">{weather.gusts} м/c</p>
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
            </div>
        </main>
    );
}

export default Weather;
