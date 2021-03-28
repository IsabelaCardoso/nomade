import { Link } from 'react-router-dom'

import logo from '../image/logo.svg';

function Header() {
  return(
    <header>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">        
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} width="112" />
          </Link>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div className="navbar-menu" id="navbarMenu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link class="button is-primary">
                  Ajuda
                </Link>
                <Link class="button is-primary" to="/form">
                  Cadastre-se
                </Link>
                <a class="button is-light is-outlined" href="https://login.smiles.com.br/login?state=g6Fo2SBYUV9Kd0Z6MUdvM3plUDN0eHVCcnV3Z0hLbzRwS3lFRqN0aWTZIE1hS3NZcHg0cFlkWm5vakgzXzdNMnJDMjlpalI4MHVro2NpZNkgeXlONktoeU9iMlBHR1A4ZHBoVWdFNTg0V2NpR3BUckg&client=yyN6KhyOb2PGGP8dphUgE584WciGpTrH&protocol=oauth2&prompt=login&redirect_uri=https%3A%2F%2Fwww.smiles.com.br%2Flogincb%3Fdest%3D&audience=https%3A%2F%2Fsmiles.api&scope=openid%20profile%20email&response_type=code">
                  Entrar
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;