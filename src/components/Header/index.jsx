
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'


function Header(){

  

    return(
        <nav className="max-width header">
            <img src={logo} alt="" />
            <div className='nav-link-section'>
                <NavLink to="/" className={({isActive}) => (isActive ? "nav-link-active" : "nav-link")}>Accueil</NavLink>
                <NavLink to="/about" className={({isActive}) => (isActive ? "nav-link-active" : "nav-link")}>A propos</NavLink>
            </div>
        </nav>
    )
};

export default Header;