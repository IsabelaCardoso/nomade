import GoalsIcon from '../image/goals-icon.svg'
import microGoalsImg from '../image/microGoalsImg.svg';

function MicroGoals() {
  return(
    <div className="my-6">
      <div className="is-flex mb-6">
        <div>
          <img src={GoalsIcon} width={30} />
        </div>
        <div className="is-flex-grow-1 has-text-grey ml-5">
          <h4 className="title is-4 mb-0 has-text-grey">Micro Metas</h4>
        </div>
      </div>
      <div className="py-6 my-6">
        <img src={ microGoalsImg } />
      </div>
      <div className="has-text-centered">
        <button className="button is-primary is-medium">
          Compartilhar suas trilhas nas redes sociais
        </button>
      </div>
    </div>
  )
}

export default MicroGoals;
