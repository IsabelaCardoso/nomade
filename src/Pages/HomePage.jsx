import { Link } from 'react-router-dom'

import Champions from '../image/homepage-champions.svg'
import Board from '../image/homepage-board.svg'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Mile from '../image/homepage-mile.svg'
import Tag from '../Components/Tag'
import WorldConnection from '../image/homepage-world-connection.svg'

function HomePage() {
  return(
    <div>
      <Header />

      <div className="container pb-6 mb-6">
        <div className="hero is-halfheight">
          <div className="hero-body columns is-align-items-center mt-4">
            <div className="column has-text-right pr-6">
              <p className="title has-text-primary is-1 has-text-weight-bold">Olá, eu sou a Mile!</p>
              <p className="is-size-4 has-text-grey">E vou te ajudar a fazer parte nosso</p>
              <p className="has-text-info is-size-4 has-text-weight-bold">Nomadê Smiles</p>
            </div>
            <div className="column pl-6">
              <img className="image" src={Mile} width="80%" />
            </div>
          </div>
        </div>

        <hr />

        <div className="has-text-centered has-text-grey is-size-3 p-6 m-6">
          <p>
            Nômade Digital é uma pessoa que aproveita sua <span className="has-text-weight-bold">liberdade</span> para viajar,<br /> conhecendo novos lugares, culturas e pessoas.
          </p>
          <p className="has-text-weight-bold">
            Nomadê é quem usa Smiles como parceira nessa trajetória
          </p>
        </div>

        <div className="columns is-align-items-center my-6">
          <div className="column has-text-right has-text-grey">
            <Tag text="Tenha seu planejamento" />
            <h3 className="title is-3 has-text-grey mt-3">Vamos criar um plano com metas.</h3>
            <p className="is-size-4">Você visualiza seu avanço enquanto<br />aproveita ao máximo nossos benefícios</p>
          </div>
          <div className="column">
            <img src={Board} />
          </div>
        </div>

        <div className="columns is-align-items-center my-6">
          <div className="column">
            <img src={Champions} width="80%" />
          </div>
          <div className="column has-text-grey">
            <Tag text="Convide e compartilhe" />
            <h3 className="title has-text-grey is-3 mt-3">Você pode convidar pessoas<br />queridas para comemorar os avanços<br />de suas metas.</h3>
            <p className="is-size-4">A experiência fica melhor se for<br />compartilhada</p>
          </div>
        </div>

        <div className="has-text-centered">
          <img src={WorldConnection} width="30%" />
          <h3 className="title is-3 has-text-grey has-text-weight-bold mb-6">Vamos iniciar seu planejamento<br />personalizado agora</h3>
          <Link className="button is-primary is-large" to="/formulario">Quero ser nomadê</Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;
