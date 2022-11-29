import { Link } from 'react-router-dom';


function Navbar(){

    return <div className="navbar">
        <h1>Movie-Info</h1>
        <div>
            <Link className="A" to="/">Home</Link>
        </div>
    </div>
}

export default Navbar;