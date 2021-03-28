import Destinations from "../Components/Destinations";
import MicroGoals from "../Components/MicroGoals";
import Consultants from "../Components/Consultants";
import Services from "../Components/Services";
import Header from "../Components/Header";
import Footer from '../Components/Footer';

function PlanningPage() {
  return(
    <div>
      <Header />
      <div className="container">
        <div className="my-6">
          <Destinations />
        </div>
        <div className="my-6">
          <MicroGoals />
        </div>
        <div className="my-6">
          <Consultants />
        </div>
        <div className="my-6">
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PlanningPage;
