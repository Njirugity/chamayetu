import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Members from "../pages/Members/Member";
import Payment from "../pages/Loans/Loans";
import Contributions from "../pages/Contributions/Contributions";
import Repayments from "../pages/Repayments/Repayments";
import Login from "../pages/Login/Login";
import SignupPage from "../pages/Login/SignUp";
import Sidebar from "./Sidebar/Sidebar";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/loans" element={<Payment />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/repayments" element={<Repayments />} />
        <Route path="/settings" element={<h1>Settings Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
      </Route>

      {/* Routes without Sidebar */}
      <Route path="/landing" element={<LandingPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/landing" />} />
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
