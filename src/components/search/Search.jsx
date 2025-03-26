import "./Search.scss";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Search = ({ city, setCity, fetchData, setCityLength }) => {
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
    e.preventDefault();
    fetchData();
    setCity("");
    setCityLength(city.length);
  };

  return (
    <div className="search">
      <div className="container">
        <h4>Enter a city or region</h4>
        <div className="line">
          <form onSubmit={formSubmit}>
            <input
              type="text"
              placeholder="For example, Prague"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <IoMdClose className="close" onClick={() => setCity("")} />
            <button className="form__square">
              <IoIosSearch />
            </button>
          </form>
          <div className="time">
            <p>
              Local time: {dayNames[date.getDay()]}, {date.getHours()}:
              {date.getMinutes().length == 1
                ? "0" + date.getMinutes()
                : date.getMinutes()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
