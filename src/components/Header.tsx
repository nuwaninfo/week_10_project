import "../styles/header.css"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <h1>A heading here</h1>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a className="waves-effect waves-light btn">FI</a>
            </li>
            <li>
              <a className="waves-effect waves-light btn">EN</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
