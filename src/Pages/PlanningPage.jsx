import Destinations from "../Components/Destinations";
import MicroGoals from "../Components/MicroGoals";
import Consultants from "../Components/Consultants";
import Services from "../Components/Services";
import Header from "../Components/Header";
import cardImage1 from '../image/cardImage1.svg';
import cardImage2 from '../image/cardImage2.svg';
import cardImage3 from '../image/cardImage3.svg';
import cardImage4 from '../image/cardImage4.svg';
import cardImage5 from '../image/cardImage5.svg';
import cardImage6 from '../image/cardImage6.svg';

function PlanningPage() {
  return(
    <div>
      <Header />
      <div className="container">
        <Destinations />
        <MicroGoals />
        <Consultants />
        <Services />
      </div>
    </div>
  )
}

export default PlanningPage;
