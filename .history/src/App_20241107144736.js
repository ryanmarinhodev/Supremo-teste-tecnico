import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Notification from "./Components/Notifications/notification";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
