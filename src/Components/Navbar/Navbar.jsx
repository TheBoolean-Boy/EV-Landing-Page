import './Navbar.css'


function Navbar(){
  return(
    <div className="nav">
      <div className="nav-logo">EV-0lution</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>Home</li>
        <li className='nav-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;