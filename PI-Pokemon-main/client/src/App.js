import './App.css';
import {Route} from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Home } from './components/Home/Home';
import CreateForm from './components/CreatePokemon/CreatePokemon';
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
  
    <div className='body'>
      <Route exact path={'/'}>
        <LandingPage />
      </Route>
      <Route exact path={'/home'}>
        <Home />
      </Route>
      <Route exact path={'/create'} component={CreateForm}/>
      <Route exact path={'/home/:id'} component={PokemonDetails} />
    </div>
  
  );
}

export default App;
