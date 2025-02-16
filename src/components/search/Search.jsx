import "./Search.scss";
import imageSearch from "../../images/icons/searchIcon.svg";
import iconClose from "../../images/icons/iconClose.svg";

function Search() {
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

    return (
        <div className="search">
            <div className="container">
                <h4>Введите город или район</h4>
                <div className="line">
                    <form>
                        <input type="text" placeholder="Например, Москва" />
                        <img className="close" src={iconClose} alt="" />
                        <div className="form__square">
                            <img src={imageSearch} alt="search" />
                        </div>
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
