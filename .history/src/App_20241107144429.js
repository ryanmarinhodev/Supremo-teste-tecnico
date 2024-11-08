import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import NotificationsPage from "./Components/Notifications/notification";

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Login />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Router>
    </BrowserRouter>
  );
};

export default App;
