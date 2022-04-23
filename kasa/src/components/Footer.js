import '../styles/Footer.css';
import logo from '../assets/LOGO.png';

function Footer() {
    return(
        <div className="Footer">
            <img src={logo} className="Footer-logo" alt="logo" />
            <p>
                &copy; 2020 Kasa. All rights reserved
            </p>

        </div>
    );
}

export default Footer;