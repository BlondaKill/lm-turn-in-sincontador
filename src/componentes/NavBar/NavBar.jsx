import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1 className={"navbar-link"}>LA MALA</h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink className={"nav-link"} to="/categoria/Blondes"> BLONDES </NavLink>
                    </li>

                    <li>
                        <NavLink  className={"nav-link"} to="/categoria/Brunettes"> BRUNETTES </NavLink>
                    </li>

                    <li>
                        <NavLink className={"nav-link"} to="/categoria/Darks"> DARKS </NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;
