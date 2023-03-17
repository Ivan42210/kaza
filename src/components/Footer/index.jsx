import logo from '../../assets/logoDarkMode.svg'
import '../../styles/Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;