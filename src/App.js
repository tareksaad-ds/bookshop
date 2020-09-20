import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nvbar from "./components/layout/navbar";
import Main from "./components/slider/main";
import Cart from "./components/shopping/Cart";
import Footer from "./components/layout/footer";
import store from "./store.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Nvbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
