import "./RememberMe.css";
function RememberMe({
  checked,
  onChange,
}) {
  return (
    <label className="remember-me">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span>Remember Me</span>
    </label>
  );
}

export default RememberMe;