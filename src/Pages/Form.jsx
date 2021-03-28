import Header from '../Components/Header';


function Form() {
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
                <input type="radio" name="beach-mountain" />
                Praia
              </label>
              <label>
                <input type="radio" name="beach-mountain" />
                Montanha
              </label>
              <label>
                <input type="radio" name="beach-mountain" />
                Ambos
              </label>        
            </div>
            <div className="col">
              <span>Qual a temperatura ideal para você?</span>
              <label>
                <input type="radio" name="cold-hot-weather" />
                Calor
              </label>
              <label>
                <input type="radio" name="cold-hot-weather" />
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
                <input type="checkbox" name="cold-hot-weather" />
                Sites de reserva hospedagem online
              </label>
              <label>
                <input type="checkbox" name="cold-hot-weather" />
                Compras online
              </label>
              <label>
                <input type="checkbox" name="cold-hot-weather" />
                Transporte particular
              </label>
              <label>
                <input type="checkbox" name="cold-hot-weather" />
                Aluguel de carros
              </label>
              <label>
                <input type="checkbox" name="cold-hot-weather" />
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
