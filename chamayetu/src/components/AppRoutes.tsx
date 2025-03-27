import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Members from "../pages/Members/Member";
import Payment from "../pages/Loans/Loans";
import Contributions from "../pages/Contributions/Contributions";
import Login from "../pages/Login/Login";
import Sidebar from "./Sidebar/Sidebar";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/loans" element={<Payment />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route
          path="/payments"
          element={<h1>Loans Repayment Page. Coming soon</h1>}
        />
        <Route path="/settings" element={<h1>Settings Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
      </Route>

      {/* Routes without Sidebar */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};

// Layout that includes Sidebar
const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="pages">
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    </div>
  );
};

// Layout without Sidebar (for Login page)
const AuthLayout = () => {
  return (
    <div className="auth-pages">
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
};

export default AppRoutes;
