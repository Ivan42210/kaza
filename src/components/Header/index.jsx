import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'


function Header(){
    return(
        <nav className="max-width header">
            <img src={logo} alt="" />
            <div>
                <Link to="/" className='nav-link link-primary'>Accueil</Link>
                <Link to="/about" className='nav-link link-primary'>A propos</Link>
            </div>
        </nav>
    )
};

export default Header;