import servicesCard1 from '../image/servicesCard1.svg';
import servicesCard2 from '../image/servicesCard2.svg';
import servicesCard3 from '../image/servicesCard3.svg';
import servicesCard4 from '../image/servicesCard4.svg';
import servicesCard5 from '../image/servicesCard5.svg';
import servicesCard6 from '../image/servicesCard6.svg';
import servicesCard7 from '../image/servicesCard7.svg';
import servicesCard8 from '../image/servicesCard8.svg';
import servicesCard9 from '../image/servicesCard9.svg';
import servicesCard10 from '../image/servicesCard10.svg';
import wpp from '../image/wpp.svg';
import services from '../image/services-icon.svg';

function Services() {
  const servicesImgCards = [ servicesCard1, servicesCard2,
    servicesCard3, servicesCard4, servicesCard5,
    servicesCard6, servicesCard7, servicesCard8,
    servicesCard9, servicesCard10 ];

  const servicesArr = [
    {
      title: 'BOOKING',
      desc: 'Reserve e acumule milhas por diária', 
    },
    {
      title: 'SHOPPING SMILES',
      desc: 'Magalu, PontoFrio, Shell, Netshoes e mais! Compre e acumule',
    },
    {
      title: 'UBER E UBER EATS',
      desc: 'Uber pré-pago: Compre créditos e ganhe milhas (até 3 milhas por real gasto)'
    },
    {
      title: 'LOCALIZA',
      desc: 'Alugue e acumule ou pague com milhas'
    },
    {
      title: 'SEGURO VIAGEM',
      desc: 'Contrate e acumule ou use suas milhas'
    },
    {
      title: 'DICAS DA MILE',
      desc: 'Vou te mandar nossa Newsletter semanal e qualquer novidade pode deixar que eu te aviso via SMS ou no app Smiles, certinho?'
    },
    {
      title: 'RADAS SMILES',
      desc: 'Cadastramos 3 desses destinos. Vou monitorar os valores e te aviso quando houver atualização. Acompanhe também pelo nosso app Smiles!'
    },
    {
      title: 'VIAJE FÁCIL NOMADÊ',
      desc: 'Reserve sua passagem garantindo o preço atual, via juntando suas milhas e só quite até 60 dias do embarque'
    },
    {
      title: 'TRANSFIRA PONTOS DO CARTÃO DE CRÉDITO',
      desc: 'BB, Bradesco, Itaú, Nubank e mais! O uso do seu cartão de crédito gera pontos que viram milhas e te ajudam a avançar no seu planejamento!'
    },
    {
      title: 'SMILES & MONEY',
      desc: 'Aproveite ainda mais! Você sempre pode mesclar pagamento em dinheiro + milhas'
    }
  ] 

  function servicesCards() {
    const map = servicesArr.map((service, index) => {
      return(
        <div className="card column is-2 mb-4">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={servicesImgCards[index]}
                alt="destination city"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{service.title}</p>
                <p className="subtitle is-6">{service.desc}</p>
              </div>
            </div>
          </div>
        </div>
      );
    })
    return map;
  }

  return(
    <div className="my-6">
      <div className="subtitles">
        <div className="is-flex mb-6">
          <div>
            <img src={services} width={65} />
          </div>
          <div className="is-flex-grow-1 has-text-grey ml-5">
            <h4 className="title is-4 mb-0 has-text-grey">Serviços Smiles</h4>
            <p className="is-size-6">Te ajudam a alcançar mais rápido seu objetivo</p>
          </div>
        </div>
        <div className="columns is-multiline is-centered my-6">
          {servicesCards()}
        </div>


        <div className="mx-6 px-6">
          <div className="notification is-success mx-6 is-flex is-justify-content-space-around is-align-items-center">
            <img src={wpp} alt="símbolo de um telefone"/>
            <span className="is-size-4 has-text-weight-bold">Convide uma pessoa incrível para ser nomadê</span>
            <button class="button is-light is-medium is-outlined">Convidar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
