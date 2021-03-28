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
          <div className="row">
            <label>
            Qual sua cidade atual?
              <input type="text" />
            </label>
          </div>
          <div className="row">
            <div className="col">           
              <span>O que você prefere?</span> 
              <label>
                <input
                  id="beach"
                  value={ beachMountain }
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.id) }
                />
                Praia
              </label>
              <label>
                <input
                  id="mountain"
                  value={ beachMountain }
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.id) }
                />
                Montanha
              </label>
              <label>
                <input
                  value="beach mountain"
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.value) }
                />
                Ambos
              </label>
            </div>
            <div className="col">
              <span>Qual a temperatura ideal para você?</span>
              <label>
                <input
                  value="hot"
                  type="radio"
                  name="cold-hot-weather"
                  // onClick={ (event) => setHot(event.target.value) }
                />
                Calor
              </label>
              <label>
                <input
                  type="radio"
                  name="cold-hot-weather"
                  onClick={ (event) => setBeachMoutains(event.target.value) }
                />
                Frio
              </label>
              <label>
                <input type="radio" name="cold-hot-weather" />
                Ambos
              </label>        
            </div>
          </div>
          <div className="row">
            <div className="col">
            <span>Quais serviços você utiliza atualmente?</span>
              <label>
                <input type="checkbox" name="services" />
                Sites de reserva hospedagem online
              </label>
              <label>
                <input type="checkbox" name="services" />
                Compras online
              </label>
              <label>
                <input type="checkbox" name="services" />
                Transporte particular
              </label>
              <label>
                <input type="checkbox" name="services" />
                Aluguel de carros
              </label>
              <label>
                <input type="checkbox" name="services" />
                Delivery de comida
              </label>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="row">
            <label>
              Quais regiões você prefere?
              <input type="text" />
            </label>
          </div>
          <div className="row">
            <div className="col">
              <span>Qual localidade você prefere?</span>
              <label>
                <input type="radio" name="country-capital" />
                Capital
              </label>
              <label>
                <input type="radio" name="country-capital" />
                Interior
              </label>
              <label>
                <input type="radio" name="country-capital" />
                Ambos
              </label>
            </div>
            <div className="col">
              <span>Seu próximo destino será:</span>
              <label>
                <input type="radio" name="national-international" />
                Nacional
              </label>
              <label>
                <input type="radio" name="national-international" />
                Internacional
              </label>
            </div>
          </div>
          <div className="row">
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
