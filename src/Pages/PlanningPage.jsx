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
        <Destinations />
        <div className="p-4"/>
        <MicroGoals />
        <div className="p-6"/>
        <Consultants />
        <div className="p-6"/>
        <Services />
      </div>
      <Footer />
    </div>
  )
}

export default PlanningPage;
