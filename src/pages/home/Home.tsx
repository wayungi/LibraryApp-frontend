import "./Home.css"
import Books from "../../components/books/Books"

const Home = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-top">
                    <div>
                        <div className="hero-eyebrow">Open now · *** titles on shelf</div>
                        <h1 className="hero-title">What will you <em>check out</em> today?</h1>
                    </div>
                    <p className="hero-note">Every title below is avaialable for borrowing right now. Reserve one and it's held at the desk under your card for 48 hours.</p>
                </div>

                <div className="search-card">
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(35,42,46,0.45)" }}>SEARCH</span>
                    <input type="text" placeholder="Try a title, an author, or how the book made you feel…" aria-label="Search the catalog" />
                    <button className="go">Look up</button>
                </div>
            </section>

            <div className="drawer-tabs" role="tablist" aria-label="Filter by genre">
                <button className="active">All titles</button>
                <button>Fiction</button>
                <button>Mystery</button>
                <button>Sci-Fi</button>
                <button>Poetry</button>
                <button>History</button>
                <button>Nature</button>
            </div>

            <section className="shelf">
                <div className="shelf-inner">
                    <div className="shelf-head">
                        <h2>On the shelf</h2>
                        <span className="count">Showing 5 of 10</span>
                    </div>

                    {/* display the avaialable books for borrowing here */}
                    <div className="grid">
                       <Books/>

                        <article className="book">
                            <div className="cover" style={{ background: "linear-gradient(155deg,#7a4b2e,#2a1c14);" }}>
                                <span className="stamp out">Due 9/02</span>
                                <span className="spine-title">Salt &amp; Longitude</span>
                            </div>
                            <div className="meta">
                                <p className="title">Salt &amp; Longitude</p>
                                <p className="author">R. K. Okafor</p>
                                <div className="row">
                                    <span className="call">ISBN</span>
                                    <button className="borrow-btn" disabled>Hold</button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home


{/* <article className="book">
                            <div className="cover" style={{background:"linear-gradient(155deg,#3d5a52,#1c2e26);"}}>
                                <span className="stamp available">Available</span>
                                <span className="spine-title">The Undertow</span>
                            </div>

                            <div className="meta">
                                <p className="title">The Undertow</p>
                                <p className="author">Marguerite Feld</p>
                                <div className="row">
                                    <span className="call">ISBN</span>
                                    <button className="borrow-btn">Borrow</button>
                                </div>
                            </div>
                        </article> */}