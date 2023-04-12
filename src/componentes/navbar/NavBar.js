import CardWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <nav>
            <h3>Mil pasos</h3>
            <div>
                <button>Nike</button>
                <button>Adidas</button>
                <button>Puma</button>
            </div>
            <CardWidget/>
        </nav>
    )
}

export default NavBar