import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./../../store";
import { Provider } from "react-redux";
import GlobalView from "../../domain/COVID19/components/EstadisticaMundial/GlobalView.jsx";
import CountryView from "../../domain/COVID19/components/EstadisticaMundial/CountryView.jsx";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container-fluid main-content">
            <Switch>
              <Route
                exact
                path={"/"}
                render={(props) => <GlobalView {...props} />}
              />
              <Route
                exact
                path={"/country/:nameCountry"}
                render={(props) => <CountryView {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
