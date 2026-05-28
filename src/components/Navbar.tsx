import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <nav>
            
            <Link to='/'>Home</Link>
            <br />
            <Link to="/about">About Us</Link>
            <br />
            <Link to="/contact">Contact Us</Link>
            <br />
            <Link to="/login">Login</Link>
        </nav>
        </>
    )
}

export default Navbar;