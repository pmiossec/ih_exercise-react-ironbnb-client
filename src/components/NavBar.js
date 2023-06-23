import { NavLink } from "react-router-dom"

function NavBar(){
    return(<div className="NavBar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/apartments">Apartments</NavLink>
    <NavLink to="/apartments/create">Create</NavLink>
    </div>);
}

export default NavBar;