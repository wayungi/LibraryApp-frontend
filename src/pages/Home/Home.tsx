import "./Home.css"

const  Home = () => {
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
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "rgba(35,42,46,0.45)"}}>SEARCH</span>
                    <input type="text" placeholder="Try a title, an author, or how the book made you feel…" aria-label="Search the catalog" />
                    <button className="go">Look up</button>
                </div>
            </section>


            
        </>
    )
}

export default Home