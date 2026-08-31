import './Auth.css'
import { Link } from 'react-router'
import LibraryCard from '../../components/card/LibraryCard'

const  Signup = () => {
    return (
        <>
            <div className="auth-page">

                <div className="auth-visual">
                    <LibraryCard status="NEW" />                   
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