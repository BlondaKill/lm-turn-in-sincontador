import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>La Mala</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/Blondes"> Blondes </NavLink>
                    </li>

                    <li>
                        <NavLink  to="/categoria/Brunette"> Brunette </NavLink>
                    </li>

                    <li>
                        <NavLink  to="/categoria/Darks"> Darks </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
