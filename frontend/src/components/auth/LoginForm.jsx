import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import RememberMe from "./RememberMe";
import { useState } from "react";
import toast from "react-hot-toast";
import authService from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";


function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      toast.error(Object.values(validationErrors)[0]);
      return;
    }

    setLoading(true);

    try {
      const response = await authService.login(formData);
      login(response.data.user, response.data.token);

      toast.success("Login Successful!");

      navigate("/dashboard");
      
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <Card className="login-card">
      <div className="login-header">
        <h2>Welcome Back 👋</h2>

        <p>Sign in to continue to SecureVault.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />

        <PasswordInput
          id="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          autoComplete="current-password"
        />

        <div className="login-options">
          <RememberMe
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />

          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" loading={loading}>
          Login
        </Button>
        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="login-footer">
          <p>Don't have an account?</p>

          <Link to="/register">Create Account</Link>
        </div>
      </form>
    </Card>
  );
}

export default LoginForm;
