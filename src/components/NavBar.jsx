import { Link } from "react-router-dom"
import "../App.css";

function Navbar() {
  return (
    <nav className= 'navbar'>
      <Link id= "ingLink" to="/ingredients" >Menu Item Search</Link>
      <Link id="courseLink" to="/course">Search By Course</Link>
      <Link id="addLink"to="/add-item">Add Menu Item</Link>
      <Link id="homeLink"to="/">Home</Link>

    </nav>
    
  )
}
export default Navbar;