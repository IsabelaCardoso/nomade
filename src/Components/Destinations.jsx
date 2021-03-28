function Destinations() {
  const destinations = [
    {
      imgId: 1,
      name: "Salvador (SSA)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "5.000",
      paymentType: "milhas/trecho" 
    },
    {
      imgId: 2,
      name: "Recife (REC)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "9.700",
      paymentType: "milhas/trecho" 
    },
    {
      imgId: 3,
      name: "Fortaleza (FOR)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "8.200",
      paymentType: "milhas/trecho" 
    },
    {
      imgId: 4,
      name: "Natal (NAT)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "7.500",
      paymentType: "milhas/trecho" 
    },
    {
      imgId: 5,
      name: "São Luiz (SLZ)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "8.600",
      paymentType: "milhas/trecho" 
    },
    {
      imgId: 6,
      name: "Maceio (MCZ)",
      from: "Saindo de: SÃO PAULO (GRU)",
      valueRange: "a partir de:",
      value: "9.200",
      paymentType: "milhas/trecho" 
    }
  ]

  function destinyCards() {
    console.log('chegou linha 25')
    const map = destinations.map((destiny) => {
      // let imgPath = `../image/cardImage${destiny.imgId}.svg`;
      console.log(destiny)
      return(
        <div className="card column">
          <div className="card-image">
            <figure className="image is-4by3">
              {/* <img src={require(imgPath)} alt="destination city" /> */}
              {/* <img src={cardImage2} alt="destination city" /> */}
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                </figure>
              </div>
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
    <div>
      <h1>Montei esse planejamento conforme suas preferências</h1>
      <img src="" alt="" />
      <div className="destiny-cards">
        <h2>Sugestões de destinos para Mês/Ano</h2>
        <p>Selecione 1 opção:</p>
        <div className="columns">
        {destinyCards()}
        </div>
        <button>
          Fazer uma nova simulação
        </button>
      </div>
    </div>
  )
}

export default Destinations;

