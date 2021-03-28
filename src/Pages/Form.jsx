import Header from '../Components/Header';
import { useState } from 'react';

function Form() {
  const [city, setCity] = useState();
  const [beachMountain, setBeachMoutains] = useState('');
  const [hotCold, setHotCold] = useState();
  const [services, setServices] = useState();
  const [regions, setRegions] = useState();
  const [locality, setLocality] = useState();
  const [nacionality, setNacionality] = useState();

  return(
    <div>
      <Header />
      <div className="container mt-6 has-text-grey">
        <h1 className="title has-text-centered has-text-primary has-text-weight-bold">Vamos montar<br />sua trilha</h1>
        <h2 className="subtitle has-text-grey">DADOS PESSOAIS</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <div className="field mb-6">
              <label
                className="label has-text-weight-medium has-text-grey"
              >
                Qual sua cidade atual?
              </label>
              <div className="control">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Digite sua cidade"
                />
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <span className="mb-5">O que você prefere?</span> 
                <div className="control">
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      id="beach"
                      value={ beachMountain }
                      type="radio"
                      name="beach-mountain"
                      onClick={ (event) => setBeachMoutains(event.target.id) }
                    />
                    Praia
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      id="mountain"
                      value={ beachMountain }
                      type="radio"
                      name="beach-mountain"
                      onClick={ (event) => setBeachMoutains(event.target.id) }
                    />
                    Montanha
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      value="beach mountain"
                      type="radio"
                      name="beach-mountain"
                      onClick={ (event) => setBeachMoutains(event.target.value) }
                    />
                    Ambos
                  </label>
                </div>
              </div>
              <div className="column">
                <span className="mb-5">Qual a temperatura ideal para você?</span>
                <div className="control">
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      value="hot"
                      type="radio"
                      name="cold-hot-weather"
                      // onClick={ (event) => setHot(event.target.value) }
                    />
                    Calor
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      type="radio"
                      name="cold-hot-weather"
                      onClick={ (event) => setBeachMoutains(event.target.value) }
                    />
                    Frio
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="cold-hot-weather" />
                    Ambos
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="field col">
                <span className="mb-5">Quais serviços você utiliza atualmente?</span>
                <div className="control">
                  <label
                    className="checkbox"
                  >
                    <input type="checkbox" name="services" />
                    Sites de reserva hospedagem online
                  </label>
                  <br />
                  <label
                    className="checkbox"
                  >
                    <input type="checkbox" name="services" />
                    Compras online
                  </label>
                  <br />
                  <label
                    className="checkbox"
                  >
                    <input type="checkbox" name="services" />
                    Transporte particular
                  </label>
                  <br />
                  <label
                    className="checkbox"
                  >
                    <input type="checkbox" name="services" />
                    Aluguel de carros
                  </label>
                  <br />
                  <label
                    className="checkbox"
                  >
                    <input type="checkbox" name="services" />
                    Delivery de comida
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="field mb-6 row">
              <label
                className="label has-text-weight-medium has-text-grey"
              >
                Quais regiões você prefere?
              </label>
              <div className="control">
                <input
                  type="text"
                  className="input is-medium"
                  placeholder="Escolha a região"
                />
              </div>
            </div>
            <div className="columns mb-6">
              <div className="column">
                <span className="mb-5">Qual localidade você prefere?</span>
                <div className="control">
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="country-capital" />
                    Capital
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="country-capital" />
                    Interior
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="country-capital" />
                    Ambos
                  </label>
                </div>
              </div>
              <div className="column">
                <span className="mb-5">Seu próximo destino será:</span>
                <div className="control">
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="national-international" />
                    Nacional
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input type="radio" name="national-international" />
                    Internacional
                  </label>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="field mb-6 column">
                <label label="label">Mês de previsão de ida</label>
                <div className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    placeholder="Mês"
                  />
                </div>
              </div>
              <div className="field mb-6 column">
                <label label="label">Ano</label>
                <div className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    placeholder="Ano"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="is-flex is-justify-content-center">
          <button
            className="button is-primary"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form;
