import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/rest/members/logon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          data.errorMessage ||
            "The credentials used are incorrect, please try again."
        );
      }

      // If successful, redirect to home
      navigate("/home");
    } catch (error: any) {
      setError(error.message); // Show error in dialog
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <h2 className="text-center text-2xl font-bold mb-6">LOGIN</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              className="input-field"
              value={email}
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Error Modal */}
      {error && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="modal-header">
              <h2>Login failed</h2>
            </div>
            <div className="modal-content">
              <p>⚠ {error}</p>
            </div>
            <button className="modal-ok" onClick={() => setError(null)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
