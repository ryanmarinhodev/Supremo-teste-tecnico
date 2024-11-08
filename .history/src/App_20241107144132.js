import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
};

export default App;
