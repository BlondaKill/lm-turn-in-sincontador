import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1 className={"nav-link"}>La Mala</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className={"nav-link"} to="/categoria/Blondes"> Blondes </NavLink>
                    </li>

                    <li>
                        <NavLink  className={"nav-link"} to="/categoria/Brunette"> Brunette </NavLink>
                    </li>

                    <li>
                        <NavLink className={"nav-link"} to="/categoria/Darks"> Darks </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
