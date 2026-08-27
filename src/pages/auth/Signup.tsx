import './Auth.css'
import { Link } from 'react-router'

const  Signup = () => {
    return (
        <>
            <div className="auth-page">

                <div className="auth-visual">
                    {/* the library card */}
                    <div className="library-card">
                        <div className="lc-head">
                            <span className="lc-brand">Cops Library</span>
                            <span className="lc-type">Member Card</span>
                        </div>
                        <div className="lc-name" id="preview-name">Your name here</div>
                        <div className="lc-number">№ <span id="preview-number">***</span> &nbsp;·&nbsp; Member since <span id="preview-date">Aug 2026</span></div>
                        <div className="lc-foot">
                            <span>Lending Library</span>
                            <span>5 holds maximum</span>
                        </div>
                        <span className="lc-stamp">New</span>
                    </div>
                    <p className="caption">having an online account enables you to reserve books online.</p>
                </div>


                <div className="auth-form-side">
                    <div className="auth-form-inner">
                        <div className="auth-eyebrow">First visit</div>
                        <h1 className="auth-title">Register for a member card</h1>
                        <p className="auth-sub">Takes about a minute. Your card number is issued the moment you submit — no waiting on staff.</p>

                        <form>

                            <div className="field">
                            <label htmlFor="name">Full name</label>
                            <input id="name" type="text" placeholder="Your name" autoComplete="name" />
                            </div>

                            <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" placeholder="you@email.com" autoComplete="email" required />
                            </div>

                            <div className="field">
                            <label htmlFor="pw1">Password</label>
                            <input id="pw1" type="password" placeholder="At least 8 characters" autoComplete="new-password" required />
                            </div>

                            <div className="field">
                            <label htmlFor="pw2">Confirm password</label>
                            <input id="pw2" type="password" placeholder="Type it again" autoComplete="new-password" required />
                            </div>
                            <button className="auth-submit" type="submit">Issue my card</button>
                        </form>

                        <p className="auth-switch">Already a member? <Link to="/login">Sign in</Link></p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Signup