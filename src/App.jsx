import './App.css';
import './bulma.sass';
import { Switch, Route } from 'react-router-dom';
import Form from './Pages/Form';
import HomePage from './Pages/HomePage';
import PlanningPage from './Pages/PlanningPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/formulario" component={ Form } />
      <Route exact path="/planejamento" component={ PlanningPage } />
    </Switch>
  );
}

export default App;
