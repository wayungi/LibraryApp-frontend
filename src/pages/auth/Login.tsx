import { Link } from "react-router"

const  Login = () => {
    return (
        <>
            <div className="auth-page">
                <div className="auth-visual">
                    <div className="library-card">
                    <div className="lc-head">
                        <span className="lc-brand">Corps Library</span>
                        <span className="lc-type">Member Card</span>
                    </div>
                    <div className="lc-name">Reader, Card holder</div>
                    <div className="lc-number">№ *** &nbsp;·&nbsp; Member since 2022</div>
                    <div className="lc-foot">
                        <span>Lending Library</span>
                        <span>5 holds</span>
                    </div>
                    <span className="lc-stamp">Active</span>
                    </div>
                    <p className="caption">Insert your card number below to enter the reading room</p>
                </div>

                <div className="auth-form-side">
    <div className="auth-form-inner">
      <div className="auth-eyebrow">Welcome back</div>
      <h1 className="auth-title">Sign in</h1>
      <p className="auth-sub">Use your card number or the email on file. Once you're in, holds and borrowing are one tap away.</p>

      <form>
        <div className="field">
          <label htmlFor="id">Card number or email</label>
          <input id="id" type="text" placeholder="04471 or you@email.com" autoComplete="username" required />
        </div>
        <div className="field">
          <label htmlFor="pw">Password</label>
          <input id="pw" type="password" autoComplete="current-password" required />
        </div>
        <button className="auth-submit" type="submit">Sign in</button>
      </form>

      <p className="auth-switch">New here? <Link to="/signup">Register</Link></p>
    </div>
  </div>





            </div>
        </>
    )
}

export default Login