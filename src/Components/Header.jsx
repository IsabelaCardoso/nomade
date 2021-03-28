import logo from '../image/logo.svg';

function Header() {
  return(
    <header>
      <div>
        <img src={logo} alt="logo com o escrito Smiles" />
      </div>
      <nav>
        <button type="button">Ajuda</button>
        <button type="button">Cadastre-se</button>
        <button type="button">Entrar</button>
      </nav>
    </header>
  )
}

export default Header;