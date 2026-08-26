import { NavLink } from "react-router";
import './Navbar.css'

const Navbar = () => {
    return (
        <header>
            <section>
                <div className="brand">
                    <div className="brand-mark">CL</div>
                    <div className="brand-text">
                        <span className="name">Cops Library</span>
                        <span className="sub">Borrow, Read, Return</span>
                    </div>
                </div>
            </section>
            

            <nav className="ledger-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shelf">Shelf</NavLink>
                <NavLink to="/hold">On Hold</NavLink>
                <NavLink to="/returns">Returns</NavLink>
                <NavLink to="/admin">Admin</NavLink>
            </nav>

            <div>
                  {/* <a href="login.html" class="card-id" style="text-decoration:none;">CARD № 04471</a> */}
            </div>

        </header>
    )
}

export default Navbar;