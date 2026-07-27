import "./Input.css";

function Input({
  label,
  error = "",
  id,
  className = "",
  rightIcon,
  ...props
}) {
  return (
    <div className="input-group">

      {label && (
        <label
          htmlFor={id}
          className="input-label"
        >
          {label}
        </label>
      )}

      <div className="input-wrapper">

        <input
          id={id}
          className={`input-field ${className} ${
            error ? "input-error" : ""
          }`}
          {...props}
        />

        {rightIcon && (
          <div className="input-icon">
            {rightIcon}
          </div>
        )}

      </div>

      {error && (
        <span className="input-error-text">
          {error}
        </span>
      )}

    </div>
  );
}

export default Input;