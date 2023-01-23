import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from './store'
import  LandingPage  from './components/LandingPage'


function App() {
  return(
    <BrowserRouter>
    <div className='App'>
      <Switch>
        <Route exact path= '/' component = {LandingPage} />
        <Route exact path= '/home' component = {Home} />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
