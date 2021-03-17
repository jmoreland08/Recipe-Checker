import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className= 'navbar'>
      <Link to="/ingredients" >Menu Item Search</Link>
      <Link to="/course">Search By Course</Link>
      <Link to="/add-item">Add Menu Item</Link>
      <Link to="/">Home</Link>

    </nav>
    
  )
}
export default Navbar;