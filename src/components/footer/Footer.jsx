import './Footer.scss'
import '../../index.scss'


function Footer() {

    

    return ( 
        <footer>
            <div className="container">
                <p>Data source: <a href="https://openweathermap.org/">openweathermap.org</a></p>
                <p>GitHub: <a href="https://github.com/egorkazabey">egorkazabey</a></p>
            </div>
        </footer>
     );
}

export default Footer;