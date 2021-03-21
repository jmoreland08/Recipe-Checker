import { Link } from "react-router-dom"
import "../App.css";

function Navbar() {
  return (
    <nav className= 'navbar'>
      <Link className= 'navbar'id= "ingLink" to="/ingredients" >Menu Item Search</Link>
      <Link className= 'navbar'id="courseLink" to="/course">Search By Course</Link>
      <Link className= 'navbar' id="addLink"to="/add-item">Add Menu Item</Link>
      <Link className= 'navbar' id="homeLink"to="/">Home</Link>

    </nav>
    
  )
}
export default Navbar;