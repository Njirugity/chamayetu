import { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
    // TODO: Handle authentication logic here
    navigate("/home");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="text-center text-2xl font-bold mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          {/* <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email Address
          </label> */}
          <input
            type="email"
            className="input-field"
            value={email}
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Remember Me */}
          <div className="flex items-center justify-between mt-3">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
               Remember me
            </label>
          </div>

          {/* Password Field */}
          {/* <label className="block mt-4 mb-2 text-sm font-semibold text-gray-700">
            Password
          </label> */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" : "👁‍🗨"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;