
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pedido">Pedido</NavLink></li>
                <li><NavLink to="/pagina2">Quem somos?</NavLink></li>
                <li><NavLink to="/pagina3">Cardapio</NavLink></li>
                <li><NavLink to="/pagina4">Onde estamos?</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;