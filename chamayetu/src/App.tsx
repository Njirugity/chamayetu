import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from "./pages/Home/Home";
import Members from "./pages/Members/Member";
import Contributions from "./pages/Contributions/Contributions";
import Payment from "./pages/Payments/Payments";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/payments" element={<Payment/>} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/loans" element={<h1>Loans Page</h1>} />
            <Route path="/dashboards" element={<h1>Dashboards Page</h1>} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
