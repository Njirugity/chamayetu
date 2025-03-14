import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Members from "../pages/Members/Member";
import Payment from "../pages/Payments/Payments";
import Contributions from "../pages/Contributions/Contributions";
import Login from "../pages/Login/Login";
import Sidebar from "./Sidebar/Sidebar";
  

const AppRoutes = () => {
  
    return (
      <div className="flex">
        <Sidebar />
        <div className="pages">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/payments" element={<Payment />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/loans" element={<h1>Loans Page</h1>} />
            <Route path="/dashboards" element={<h1>Dashboards Page</h1>} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
            <Route path="/logout" element={<h1>Logout Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    );
};

export default AppRoutes;