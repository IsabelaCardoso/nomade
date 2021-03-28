import { Link } from 'react-router-dom'
import cardImage1 from '../image/cardImage1.jpg';
import cardImage2 from '../image/cardImage2.svg';
import cardImage3 from '../image/cardImage3.svg';
import cardImage4 from '../image/cardImage4.svg';
import cardImage5 from '../image/cardImage5.svg';
import cardImage6 from '../image/cardImage6.svg';
import AirplaneIcon from '../image/airplane-icon.svg';

function Destinations() {

  const imgsArray = [
    cardImage1, cardImage2, cardImage3,
    cardImage4, cardImage5, cardImage6
  ]
  const destinations = [
    {
      name: "Salvador (SSA)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "5.000",
      paymentType: "milhas/trecho" 
    },
    {
      name: "Recife (REC)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "9.700",
      paymentType: "milhas/trecho" 
    },
    {
      name: "Fortaleza (FOR)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "8.200",
      paymentType: "milhas/trecho" 
    },
    {
      name: "Natal (NAT)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "7.500",
      paymentType: "milhas/trecho" 
    },
    {
      name: "São Luiz (SLZ)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "8.600",
      paymentType: "milhas/trecho" 
    },
    {
      name: "Maceio (MCZ)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "9.200",
      paymentType: "milhas/trecho" 
    }
  ]

  function destinyCards() {
    const map = destinations.map((destiny, index) => {
      return(
        <div className="card column">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={imgsArray[index]}
                alt="destination city"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{destiny.name}</p>
                <p className="subtitle is-6">{destiny.from}</p>
                <p className="subtitle is-6">{destiny.valueRange}</p>
                <p className="title is-4">{destiny.value}</p>
                <p className="subtitle is-6">{destiny.paymentType}</p>
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
      <h1 className="title">Montei esse planejamento conforme suas preferências</h1>
      <div className="is-flex mb-6">
        <div>
          <img src={AirplaneIcon} width={45} />
        </div>
        <div className="is-flex-grow-1 has-text-grey ml-5">
          <h4 className="title is-4 mb-0 has-text-grey">Sugestões de destinos para Mês/Ano</h4>
          <p className="is-size-6">Selecione 1 opção:</p>
        </div>
      </div>
      <div className="destiny-cards">
        <div className="columns">
        {destinyCards()}
        </div>
        <div className="has-text-centered">
          <Link to="/formulario" className="button is-primary is-medium my-6">
            Fazer uma nova simulação
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Destinations;

