import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-layout">

      {/* Left Panel */}

      <div className="auth-layout__left">

        <div className="auth-layout__content">

          <h1>🔐 SecureVault</h1>

          <h2>Secure Your Files.</h2>

          <p>
            Enterprise-grade AES-256 encryption for
            protecting confidential files with modern
            cloud technology.
          </p>

          <div className="auth-layout__features">

            <div>✅ AES-256 Encryption</div>

            <div>☁ Secure Cloud Storage</div>

            <div>⚡ Fast File Processing</div>

            <div>🛡 Privacy First</div>

          </div>

        </div>

      </div>

      {/* Right Panel */}

      <div className="auth-layout__right">

        {children}

      </div>

    </div>
  );
}

export default AuthLayout;