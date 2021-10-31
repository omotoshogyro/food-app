import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
// import Orderpopup from "./pages/Ordermodal";

import MainNav from "./components/MainNav";

// import Provider from "./globalLayer/Provider";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/modal" component={Modal} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
