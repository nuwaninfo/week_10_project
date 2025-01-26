import "../styles/header.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <header className="header">
      <h1>A heading here</h1>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("About")}</Link>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn"
                onClick={() => changeLanguage("fi")}
              >
                FI
              </a>
            </li>
            <li>
              <a
                className="waves-effect waves-light btn"
                onClick={() => changeLanguage("en")}
              >
                EN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
