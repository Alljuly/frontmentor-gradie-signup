import "./App/styles.css";
import "./App.css";
import iphone from "./assets/iphone.png";

function App() {
  return (
    <>
      <div id="login-page">
        <div className="content">
          <div id="login-image">
            <h2>Gradie</h2>
            <span>Beautiful gradients in seconds</span>
            <img src={iphone} alt="iphone" width={300} />
          </div>
          <div id="login-card">
            <h2 id="login-title">Login</h2>
            <form id="login-form">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required></input>
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  minLength={8}
                ></input>
              </div>
              <div className="text-login">
                <input
                  id="terms"
                  type="checkbox"
                  className="checkbox"
                  required
                ></input>
                <label htmlFor="terms">
                  By creating an account, you agree to the{" "}
                  <a>Terms & Conditions</a>.
                </label>
              </div>
              <button type="submit">Create an acount</button>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
