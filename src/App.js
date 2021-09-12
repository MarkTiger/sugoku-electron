import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Game from './views/Game';
import Finish from './views/Finish';
import BottomTab from './components/BottomTab';
import Leaderboard from './views/Leaderboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App custom-bg vh-100 d-flex flex-column">
          <div className="flex-grow-1">
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/finish">
                <Finish />
              </Route>
              <Route path="/leaderboard">
                <Leaderboard />
              </Route>
            </Switch>
          </div>
          <div>
            <BottomTab />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
