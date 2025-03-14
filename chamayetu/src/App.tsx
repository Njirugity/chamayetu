import {BrowserRouter as Router} from "react-router-dom";

import './App.css';
import AppRoutes from "./components/AppRoutes";

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
