
import CardWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
            <h3>Mil pasos</h3>
            </Link>
            
            <div>
            <NavLink to={'/category/nike'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>nike</NavLink>
            <NavLink to={'/category/adidas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>adidas</NavLink>
            <NavLink to={'/category/puma'} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}>puma</NavLink>

            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar