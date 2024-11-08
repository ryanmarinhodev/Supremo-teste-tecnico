import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
      </Router>
    </BrowserRouter>
  );
};

export default App;
