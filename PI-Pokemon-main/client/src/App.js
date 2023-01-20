import './App.css';
import Homepage from './components/home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path = '/'>
        App
      </Route>
      <Route exact path = '/home'>
        <Homepage></Homepage>
      </Route>
    </div>
  );
}

export default App;
