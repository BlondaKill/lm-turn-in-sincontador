import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>La Mala</h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/2"> Blondes </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Brown </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/4"> Darks </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar