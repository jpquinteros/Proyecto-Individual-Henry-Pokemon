import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux"
import store from './redux/store';


function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Provider store = {store}>
        <Route exact path="/home" component={Home} />
      </Provider>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
