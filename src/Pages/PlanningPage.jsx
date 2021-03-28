import Destinations from "../Components/Destinations";
import MicroGoals from "../Components/MicroGoals";
import Consultants from "../Components/Consultants";
import Services from "../Components/Services";
import Header from "../Components/Header";

function PlanningPage() {
  return(
    <div>
      <Header />
      <Destinations />
      <MicroGoals />
      <Consultants/>
      <Services />
    </div>
  )
}

export default PlanningPage;
