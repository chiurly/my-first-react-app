import reactIcon from '../images/react-icon.png'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactIcon} className="react-icon" alt="react icon" />
      <h3>My first React app</h3>
    </nav>
  )
}
