import './Weather.scss'
import '../../index.scss'
import image from '../../images/weather/sunny.png'

function Weather({temperature, feelsLike}) {

    return (
        <main>
            <div className="container">
                <div className="card">
                    <div className="h__line">
                        <h1 className="city">Москва (RU)</h1>
                        <p className="date">Данные на 21:00</p>
                    </div>
                </div>
                <div className="temperature">
                    <div className="temperature__line">
                        <span>{temperature}℃</span>
                        <img src={image} alt="weather" />
                    </div>
                    <p className="feels">Слегка облачно, ощущается как {feelsLike}℃</p>
                </div>
                <div className="info">
                    <div className="info__line">
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Скорость ветра</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Облачность</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="info__line">
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Порывы ветра</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Видимость</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="info__line">
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Влажность</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Давление</h5>
                                <p className="element__value">0.62 м/c</p>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="info__line">
                        <div className="info__element">
                            <div className="element__line">
                                <h5>Вероятность осадков</h5>
                                <p className="element__value">0.62 м/c</p>
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
