import "./App.css";
import './styles/globals.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardProvider from "./contexts/OnboardContext";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <OnboardProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
        </OnboardProvider>
      </Router>
    </div>
  );
}

export default App;
