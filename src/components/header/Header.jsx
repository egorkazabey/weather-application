import './Header.scss'
import '../../index.scss'
import image from '../../images/icons/buttonArr.svg'


const Header = () => {

    const cities = [
            "Москва",
            "Санкт-Петербург",
            "Новосибирск",
            "Екатеринбург",
            "Казань",
            "Нижний Новгород",
    ];

    return (
        <header>
            <div className="container">
                <div className="button">
                    <img src={image} alt="arrow" />
                </div>
                <ul>{cities.map((item) => <li>{item}</li>)}</ul>
                <div className="button" style={{ transform: "rotate(180deg)" }}>
                    <img src={image} alt="arrow" />
                </div>
            </div>
        </header>
    );
}

export default Header;
