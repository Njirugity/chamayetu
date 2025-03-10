import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Members from "./pages/Members/Member";
import Contributions from "./pages/Contributions/Contributions";
import Payment from "./pages/Payments/Payments";
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="sidebar">
          <NavLink to="/" className="navItem">
            Home
          </NavLink>
          <NavLink to="/members" className="navItem">
            Members
          </NavLink>
          <NavLink to="/Contributions" className="navItem">
            Contributions
          </NavLink>
          <NavLink to="/Payments" className="navItem">
            Payments
          </NavLink>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/Payments" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </Router>
    // <div>
    //   <Payment></Payment>
    // </div>
  );
}

export default App;
