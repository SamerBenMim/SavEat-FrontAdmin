import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/LoginPage/login";
import Dashboard from "./pages/dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />}></Route>
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </Router>
  );
}

export default App;
