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
      <h1>Vamos montar sua trilha</h1>
      <h2>Dados pessoais</h2>
      <hr />
      <form>
        <div className="main-left">
          <div className="field row">
            <label
              className="label"
            >
              Qual sua cidade atual?
            </label>
            <div className="control">
              <input
                className="input is-large"
                type="text"
                placeholder="Digite sua cidade"
              />
            </div>
          </div>
          <div className="row">
            <div className="field col">
              <span>O que você prefere?</span> 
              <div className="control">
                <label
                  className="radio"
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
                <label
                  className="radio"
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
                <label
                  className="radio"
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
            <div className="field col">
              <span>Qual a temperatura ideal para você?</span>
              <div className="control">
                <label
                  className="radio"
                >
                  <input
                    value="hot"
                    type="radio"
                    name="cold-hot-weather"
                    // onClick={ (event) => setHot(event.target.value) }
                  />
                  Calor
                </label>
                <label
                  className="radio"
                >
                  <input
                    type="radio"
                    name="cold-hot-weather"
                    onClick={ (event) => setBeachMoutains(event.target.value) }
                  />
                  Frio
                </label>
                <label
                  className="radio"
                >
                  <input type="radio" name="cold-hot-weather" />
                  Ambos
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="field col">
              <span>Quais serviços você utiliza atualmente?</span>
              <div className="control">
                <label
                  className="checkbox"
                >
                  <input type="checkbox" name="services" />
                  Sites de reserva hospedagem online
                </label>
                <label
                  className="checkbox"
                >
                  <input type="checkbox" name="services" />
                  Compras online
                </label>
                <label
                  className="checkbox"
                >
                  <input type="checkbox" name="services" />
                  Transporte particular
                </label>
                <label
                  className="checkbox"
                >
                  <input type="checkbox" name="services" />
                  Aluguel de carros
                </label>
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
        <div className="main-right">
          <div className="field row">
            <label
              className="label"
            >
              Quais regiões você prefere?
            </label>
            <div className="control">
              <input
                type="text"
                placeholder="Escolha a região"
              />
            </div>
          </div>
          <div className="row">
            <div className="field col">
              <span>Qual localidade você prefere?</span>
              <div className="control">
                <label
                  className="radio"
                >
                  <input type="radio" name="country-capital" />
                  Capital
                </label>
                <label
                  className="radio"
                >
                  <input type="radio" name="country-capital" />
                  Interior
                </label>
                <label
                  className="radio"
                >
                  <input type="radio" name="country-capital" />
                  Ambos
                </label>
              </div>
            </div>
            <div className="field col">
              <span>Seu próximo destino será:</span>
              <div className="control">
                <label
                  className="radio"
                >
                  <input type="radio" name="national-international" />
                  Nacional
                </label>
                <label
                  className="radio"
                >
                  <input type="radio" name="national-international" />
                  Internacional
                </label>
              </div>
            </div>
          </div>
          <div className="field row">
            <label label="label">Mês de previsão de ida</label>
            <div className="control">
              <input
                type="text"
                className="input is-medium"
                placeholder="Mês"
              />
            </div>
            <label label="label">Ano</label>
            <div className="control">
              <input
                type="text"
                className="input is-medium"
                placeholder="Ano"
              />
            </div>
            <button type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;
