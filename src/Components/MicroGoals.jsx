import microGoalsImg from '../image/microGoalsImg.svg';

function MicroGoals() {
  return(
    <div>
      <div>
        <img src="" alt="" />
        <h1>Micro metas</h1>
      </div>
      <img src={ microGoalsImg } />
      <button
        type="button"
        className="button"
      >
        Compartilhar suas trilhas nas redes sociais
      </button>
    </div>
  )
}

export default MicroGoals;
