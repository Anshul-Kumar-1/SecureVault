import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Input from "../common/Input";
import "./PasswordInput.css";

function PasswordInput({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      id={id}
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      error={error}
      autoComplete={autoComplete}
      rightIcon={
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      }
    />
  );
}

export default PasswordInput;