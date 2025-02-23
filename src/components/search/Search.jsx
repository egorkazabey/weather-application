import './Search.scss'
import imageSearch from '../../images/icons/searchIcon.svg'
import iconClose from '../../images/icons/iconClose.svg'

function Search({setCity, city}) {
    const date = new Date();



    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday ",
        "Saturday",
    ];

    const formSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="search">
            <div className="container">
                <h4>Введите город или район</h4>
                <div className="line">
                    <form onSubmit={formSubmit}>
                        <input type="text" placeholder="Например, Москва" onChange={(e) => setCity(e.target.value)}/>
                        <img className="close" src={iconClose} alt="" />
                        <button className="form__square">
                            <img src={imageSearch} alt="search" />
                        </button>
                    </form>
                    <div className="time">
                        <p>
                            Локальное время: {dayNames[date.getDay()]},{" "}
                            {date.getHours()}:{date.getMinutes()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
