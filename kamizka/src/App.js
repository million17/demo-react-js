import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as
    Router,
  Route,
  Switch
} from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        {/* Nội dung */}
        <Switch>
          {this.showRouter(routes)}
        </Switch>
      </Router>
    );
  }

  showRouter = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return result;
  }

}

export default App;
