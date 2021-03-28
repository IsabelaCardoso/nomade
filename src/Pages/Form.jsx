import Header from '../Components/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [city, setCity] = useState();
  const [beachMountain, setBeachMoutains] = useState('');
  const [hotCold, setHotCold] = useState('');
  const [services, setServices] = useState([]);
  const [countryCapital, setCountryCapital] = useState();
  const [regions, setRegions] = useState('');
  const [nacionality, setNationality] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  function handleCheck(event) {
    const checked = services.includes(event.target.id);
    if(checked) {
      const filterService = services.filter((service) => service !== event.target.id)
      setServices(filterService)
    } else {
      setServices([...services, event.target.id])
    }
  }

  return(
    <div>
      <Header />
      <h1>Vamos montar sua trilha</h1>
      <h2>Dados pessoais</h2>
      <hr />
      <form>
        <div className="main-left">
          <div className="row">
            <label htmlFor="current-city">
            Qual sua cidade atual?
              <input
                type="text"
                id="current-city"
                onChange={ (event) => setCity(event.target.value) }
              />
            </label>
          </div>
          <div className="row">
            <div className="col">           
              <span>O que você prefere?</span> 
              <label htmlFor="beach-mountain">
                <input
                  id="beach"
                  value={ beachMountain }
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.id) }
                />
                Praia
              </label>
              <label htmlFor="beach-mountain">
                <input
                  id="mountain"
                  value={ beachMountain }
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.id) }
                />
                Montanha
              </label>
              <label htmlFor="beach-mountain">
                <input
                  id="beach mountain"
                  value={ beachMountain }
                  type="radio"
                  name="beach-mountain"
                  onClick={ (event) => setBeachMoutains(event.target.id) }
                />
                Ambos
              </label>
            </div>
            <div className="col">
              <span>Qual a temperatura ideal para você?</span>
              <label>
                <input
                  id="hot"
                  value={ hotCold }
                  type="radio"
                  name="cold-hot-weather"
                  onClick={ (event) => setHotCold(event.target.id) }
                />
                Calor
              </label>
              <label>
                <input
                  id="cold"
                  value={ hotCold }
                  type="radio"
                  name="cold-hot-weather"
                  onClick={ (event) => setHotCold(event.target.id) }
                />
                Frio
              </label>
              <label>
                <input
                id="hot cold"
                value={ hotCold }
                type="radio"
                name="cold-hot-weather"
                onClick={ (event) => setHotCold(event.target.id) }
                />
                Ambos
              </label>        
            </div>
          </div>
          <div className="row">
            <div className="col">
            <span>Quais serviços você utiliza atualmente?</span>
              <label>
                <input
                  id="sites de reserva online"
                  value={ services }
                  type="checkbox"
                  name="services"
                  onClick={(event) => handleCheck(event)}
                  />
                Sites de reserva online
              </label>
              <label>
                <input
                  id="compras online"
                  value={ services }
                  type="checkbox"
                  name="services"
                  onClick={(event) => handleCheck(event)}
                  />
                Compras online
              </label>
              <label>
                <input
                  id="transporte particular"
                  value={ services }
                  type="checkbox"
                  name="services"
                  onClick={(event) => handleCheck(event)}
                />
                Transporte particular
              </label>
              <label>
                <input
                  id="aluguel de carros"
                  value={ services }
                  type="checkbox"
                  name="services"
                  onClick={(event) => handleCheck(event)}
                />
                Aluguel de carros
              </label>
              <label>
                <input
                  id="delivery de comida"
                  value={ services }
                  type="checkbox"
                  name="services"
                  onClick={(event) => handleCheck(event)}
                />
                Delivery de comida
              </label>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="row">
            <div className="col">
              <span>Qual localidade você prefere?</span>
              <label>
                <input
                  id="capital"
                  value={ countryCapital }
                  type="radio"
                  name="country-capital"
                  onClick={ (event) => setCountryCapital(event.target.id) }
                />
                Capital
              </label>
              <label>
                <input
                  id="country"
                  value={ countryCapital }
                  type="radio"
                  name="country-capital"
                  onClick={ (event) => setCountryCapital(event.target.id) }
                />
                Interior
              </label>
              <label>
                <input
                  id="country-capital"
                  value={ countryCapital }
                  type="radio"
                  name="country-capital"
                  onClick={ (event) => setCountryCapital(event.target.id) }
                />
                Ambos
              </label>
            </div>
            <div className="col">
              <span>Seu próximo destino será:</span>
              <label>
                <input 
                  id="national"
                  value={ nacionality }
                  type="radio"
                  name="national-international"
                  onClick={ (event) => setNationality(event.target.id) }
                />
                Nacional
              </label>
              <label>
                <input
                  id="international"
                  value={ nacionality }
                  type="radio"
                  name="national-international"
                  onClick={ (event) => setNationality(event.target.id) }
                />
                Internacional
              </label>
            </div>
          </div>
          <div className="row">
            <span>Mês de previsão de ida</span>
            <select
              id="month"
              value={ month }
              onChange={(event) => setMonth(event.target.value)}
            >
              <option value="january">01 (Janeiro)</option>
              <option value="february">02 (Fevereiro)</option>
              <option value="march">03 (Março)</option>
              <option value="april">04 (Abril)</option>
              <option value="may">05 (Maio)</option>
              <option value="june">06 (Junho)</option>
              <option value="july">07 (Julho)</option>
              <option value="august">08 (Agosto)</option>
              <option value="september">09 (Setembro)</option>
              <option value="october">10 (Outubro)</option>
              <option value="november">11 (Novembro)</option>
              <option value="december">12 (Dezembro)</option>

            </select>

            <span>Ano</span>
            <select
              id="year"
              value={ year }
              onChange={(event) => setYear(event.target.value)}
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div className="row">
            <Link to="./planejamento">
              <button type="submit">
                Enviar
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form;
