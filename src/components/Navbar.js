import { Link } from "react-router-dom"
export default function Navigation() {
    return <nav className="nav">
        <ul>
            <li>
                <Link className="nav-bar-links" to="/">Home</Link>                                                                          
            </li>
            <li>
                <Link className="nav-bar-links" to="/agenda">Agenda</Link> 
            </li>
            <li>
                <Link className="nav-bar-links" to="/overview">Overview</Link>
            </li>
            <li>
                <Link className="nav-bar-links" to="/project">MDP</Link> 
            </li>
            <li>
                <Link className="nav-bar-links" to="/role">My Role</Link>
            </li>
        </ul>
    </nav>
}