import Header from '../Components/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Form() {
  const [city, setCity] = useState('');
  const [beachMountain, setBeachMoutains] = useState('');
  const [hotCold, setHotCold] = useState('');
  const [services, setServices] = useState([]);
  const [countryCapital, setCountryCapital] = useState('');
  const [regions, setRegions] = useState('');
  const [month, setMonth] = useState('01 (Janeiro)');
  const [year, setYear] = useState('2021');

  function handleCheck(event) {
    const checked = services.includes(event.target.id);
    if(checked) {
      const filterService = services.filter((service) => service !== event.target.id)
      setServices(filterService)
    } else {
      setServices([...services, event.target.id])
    }
  }

  const widthButton = {
    width: '50%',
  };

  return(
    <div>
      <Header />
      <div className="container mt-6 has-text-grey">
        <h1
          className="title has-text-centered has-text-primary has-text-weight-bold"
        >
          Vamos montar
          <br />
          sua trilha
        </h1>
        <h2 className="subtitle has-text-grey">DADOS PESSOAIS</h2>
        <hr />
        <div className="columns">
          <div className="column is-half">
            <div className="field mb-6">
              <label
                htmlFor="current-city"
                className="label has-text-weight-medium has-text-grey"
              >
                Qual sua cidade atual?
              </label>
              <div className="control">
                <input
                  type="text"
                  id="current-city"
                  value={ city }
                  className="input is-medium"
                  onChange={ (event) => setCity(event.target.value) }
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
                      id="beach mountain"
                      value={ beachMountain }
                      type="radio"
                      name="beach-mountain"
                      onClick={ (event) => setBeachMoutains(event.target.id) }
                    />
                    Ambos
                  </label>
                </div>
              </div>
              <div className="column">
                <span className="mb-5">Qual a temperatura ideal para você?</span>
                <div className="control">
                  <label
                    htmlFor="hot"
                    className="radio label-spacing"
                  >
                    <input
                      id="hot"
                      value={ hotCold }
                      type="radio"
                      name="cold-hot-weather"
                      onClick={ (event) => setHotCold(event.target.id) }
                    />
                    Calor
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
                    <input
                      id="cold"
                      value={ hotCold }
                      type="radio"
                      name="cold-hot-weather"
                      onClick={ (event) => setHotCold(event.target.id) }
                    />
                    Frio
                  </label>
                  <br />
                  <label
                    className="radio label-spacing"
                  >
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
            </div>
            <div>
              <div className="field col">
                <span className="mb-5">Quais serviços você utiliza atualmente?</span>
                <div className="control">
                  <label
                    className="checkbox"
                    htmlFor="sites de reserva online"
                  >
                    <input
                      id="sites de reserva online"
                      type="checkbox"
                      name="services"
                      value={ services }
                      onClick={(event) => handleCheck(event)}
                    />
                    Sites de reserva hospedagem online
                  </label>
                  <br />
                  <label
                    className="checkbox"
                    htmlFor="compras online"
                  >
                    <input
                      id="compras online"
                      type="checkbox"
                      value={ services }
                      name="services"
                      onClick={(event) => handleCheck(event)}
                    />
                    Compras online
                  </label>
                  <br />
                  <label
                    className="checkbox"
                    htmlFor="transporte particular"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      id="transporte particular"
                      value={ services }
                      onClick={(event) => handleCheck(event)}
                    />
                    Transporte particular
                  </label>
                  <br />
                  <label
                    className="checkbox"
                    htmlFor="aluguel de carros"
                  >
                    <input
                      type="checkbox"
                      id="aluguel de carros"
                      value={ services }
                      name="services"
                      onClick={(event) => handleCheck(event)}
                    />
                    Aluguel de carros
                  </label>
                  <br />
                  <label
                    className="checkbox"
                    htmlFor="delivery de comida"
                  >
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
          </div>
          <div className="column field is-half">
            <div className="field">
            <label
              className="label has-text-weight-medium has-text-grey"
            >
              Qual região você quer visitar?
            </label>
            <div className="control">
              <div className="select is-block mb-6">
                <select
                  id="year"
                  value={ regions }
                  onChange={(event) => setRegions(event.target.value)}
                  className="input is-medium"
                  placeholder="Escolha a região"
                >
                  <option value="Norte">Norte</option>
                  <option value="Nordeste">Nordeste</option>
                  <option value="Centro-Oeste">Centro-Oeste</option>
                  <option value="Sudeste">Sudeste</option>
                  <option value="Sul">Sul</option>
                </select>
              </div>
            </div>
          </div>
            <div className="columns">
              <div className="column mb-6">
                <span className="mb-5">Qual localidade você prefere?</span>
                <div className="control">
                  <label
                    className="radio"
                    htmlFor="capital"
                  >
                    <input
                      type="radio"
                      name="country-capital"
                      id="capital"
                      value={ countryCapital }
                      onClick={(event) => setCountryCapital(event.target.id)}
                    />
                    Capital
                  </label>
                  <br />
                  <label
                    className="radio"
                    htmlFor="country"
                  >
                    <input
                      type="radio"
                      name="country-capital"
                      id="country"
                      value={ countryCapital }
                      onClick={ (event) => setCountryCapital(event.target.id)}
                    />
                    Interior
                  </label>
                  <br />
                  <label
                    className="radio"
                    htmlFor="country-capital"
                  >
                    <input
                      type="radio"
                      name="country-capital"
                      id="country-capital"
                      value={ countryCapital }
                      onClick={ (event) => setCountryCapital(event.target.id) }
                    />
                    Ambos
                  </label>
                </div>
              </div>
            </div>
          <div className="columns">
            <div className="field column">
              <label
                className="label has-text-grey has-text-weight-medium"
              >
                Mês de previsão de ida
              </label>
              <div className="control">
                <div className="select">
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
                </div>
              </div>
            </div>
            <div className="field column">
              <label
                className="label has-text-grey has-text-weight-medium"
              >
                Ano
              </label>
              <div className="control">
                <div className="select">
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
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="is-flex is-justify-content-center">
          <Link className="is-flex is-justify-content-center" style={ widthButton } to="./planejamento">
            <button
              style={ widthButton }
              className="button is-primary"
              type="submit"
            >
              Enviar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Form;
