import InstagramIcon from '../image/instagram.svg'
import YoutubeIcon from '../image/youtube.svg'
import Nomad1 from '../image/planning-nomad-1.png'
import Nomad2 from '../image/planning-nomad-2.png'
import Nomad3 from '../image/planning-nomad-3.png'
import ShareIcon from '../image/share-icon.svg'
import TwitterIcon from '../image/twitter.svg'

function Consultants() {
  return(
    <div>
      <div className="is-flex mb-6">
        <div>
          <img src={ShareIcon} width={65} />
        </div>
        <div className="is-flex-grow-1 has-text-grey ml-5">
          <h4 className="title is-4 mb-0 has-text-grey">Conecte-se com nossos consultores nomadês*</h4>
          <p className="is-size-6">Nossos consultores nomadês são pessoas que vivem o estilo de vida nomadismo há pelo menos 3 meses.<br />Que tal marcar uma mentoria? Conecte-se!</p>
        </div>
      </div>

      <div className="columns">
        <div className="column has-text-centered">
          <img className="image" src={Nomad1} />
          <h6 className="title is-4 has-text-grey mb-2">Livia Ferreira</h6>
          <a href="https://web.whatsapp.com/" target="_blank">Entrar em contato</a>

          <div className="is-flex-align-items-center mt-2">
            <a href=""><img src={InstagramIcon} width="25px" /></a>
            <a href=""><img src={TwitterIcon} width="25px" /></a>
          </div>
        </div>

        <div className="column has-text-centered">
          <img className="image" src={Nomad2} />
          <h6 className="title is-4 has-text-grey mb-2">Douglas Cardoso</h6>
          <a href="https://web.whatsapp.com/" target="_blank">Entrar em contato</a>

          <div className="is-flex-align-items-centerr mt-2">
            <a href=""><img src={YoutubeIcon} width="25px" /></a>
            <a href=""><img src={InstagramIcon} width="25px" /></a>
          </div>
        </div>

        <div className="column has-text-centered">
          <img className="image" src={Nomad3} />
          <h6 className="title is-4 has-text-grey mb-2">Amanda Pinto</h6>
          <a href="https://web.whatsapp.com/" target="_blank">Entrar em contato</a>

          <div className="is-flex-align-items-center mt-2">
            <a href=""><img src={InstagramIcon} width="25px" /></a>
          </div>
        </div>
      </div>

      <div className="has-text-centered my-6">
        <p className="is-size-3 has-text-grey has-text-weight-bold">Além de ser nomadê, você também pode ser parte da consultoria.</p>
        <p className="is-size-5 has-text-grey">Compartilhar sua experiência, ganhar mais milhas e vantagens Smiles. É o upgrade da nossa parceria!</p>
        <a>Saiba mais sobre o programa</a>
      </div>
    </div>
  )
}

export default Consultants;
