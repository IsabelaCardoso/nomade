import './Footer.css'
import OrangeLogo from '../image/orange-logo.svg'
import TwitterLogo from '../image/logo-twitter.svg'
import InstagramLogo from '../image/logo-instagram.svg'
import FacebookLogo from '../image/logo-facebook.png'

function Footer() {
  return (
    <div className="footer-container">
      <div className="is-inline-flex">
        <img className="image" src={OrangeLogo} width="112" />

        <h3 className="title has-text-primary is-3 ml-4">Nomadê Smiles</h3>
      </div>

      <p className="my-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed<br />diam nonumy eirmod tempor invidunt ut labore et dolore<br />magna aliquyam erat, sed diam</p>

      <div>
        <a href="https://twitter.com/smilesoficial" target="_blank"><img src={TwitterLogo} /></a>
        <a href="https://www.instagram.com/smiles.oficial" target="_blank"><img src={InstagramLogo} /></a>
        <a href="https://www.facebook.com/smilesoficial" target="_blank"><img src={FacebookLogo} /></a>
      </div>

      <div className="has-text-centered">Time 81 - Hackathon Smiles</div>
    </div>
  )
}

export default Footer
