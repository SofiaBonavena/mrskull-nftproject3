import "./App.css";
import './styles/globals.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OnboardProvider from "./contexts/OnboardContext";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(OnboardProvider, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/React.createElement(Home, null))), /*#__PURE__*/React.createElement(Footer, null))));
}
export default App;