import './App.css';
import { Switch, Route } from 'react-router-dom';
import Form from './Pages/Form';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/form" component={ Form } />
    </Switch>
  );
}

export default App;
