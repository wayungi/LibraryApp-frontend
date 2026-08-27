import { Link } from "react-router"
import LibraryCard from "../../components/card/LibraryCard"




const  Login = () => {
    return (
        <>
            <div className="auth-page">
                <div className="auth-visual">
                    <LibraryCard status="ACTIVE" />
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