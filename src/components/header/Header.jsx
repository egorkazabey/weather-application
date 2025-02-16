import "./Header.scss";
import "../../index.scss";
import image from "../../images/icons/buttonArr.svg";

function Header() {
    const cities = [
        "Москва",
        "Санкт-Петербург",
        "Новосибирск",
        "Екатеринбург",
        "Казань",
        "Нижний Новгород",
    ];

    const citiesList = cities.map((city) => <li>{city}</li>);

    return (
        <header>
            <div className="container">
                <div className="button">
                    <img src={image} alt="arrow" />
                </div>
                <ul>{citiesList}</ul>
                <div className="button" style={{ transform: "rotate(180deg)" }}>
                    <img src={image} alt="arrow" />
                </div>
            </div>
        </header>
    );
}

export default Header;
