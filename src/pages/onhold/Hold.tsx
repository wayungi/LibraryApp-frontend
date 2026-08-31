const Hold = () => {
    return (
        <>
            <section className="account-hero">
                <div className="hero-eyebrow">Card № *** · Holds expire after 2 days at the desk</div>
                <h1 className="account-title">Waiting for <em>their turn</em></h1>
                <p className="account-note">One is ready for pickup now. The others are still moving through the queue — we'll email you the moment they clear.</p>

                <div className="stat-row">
                    <div className="stat"><span className="num">01</span><span className="label">Ready for pickup</span></div>
                    <div className="stat"><span className="num">02</span><span className="label">In queue</span></div>
                    <div className="stat"><span className="num">04</span><span className="label">Avg. wait, days</span></div>
                </div>
            </section>


            <section className="slip-panel">
                <div className="slip-inner">

                    <div className="slip-section">
                        <div className="slip-section-head">
                            <h2>Ready now</h2>
                            <span className="count">1 book</span>
                        </div>

                        <div className="slip-card">
                            <div className="slip-date ready">
                                <span className="d">✓</span>
                                <span className="m">Ready</span>
                            </div>

                            <div className="slip-book">
                                <div className="swatch" style={{background:"linear-gradient(155deg,#8a5a3d,#3d2814);"}}></div>
                                <div className="info">
                                    <p className="title">A Field Guide to Small Regrets</p>
                                    <p className="author">Dana Whitlock</p>
                                    <span className="call">POE / WHI / 2020</span>
                                </div>
                            </div>

                            <span className="pill ok">Held until Aug 28</span>

                            <div className="slip-actions">
                                <button className="primary">Check out</button>
                                <button className="ghost">Cancel</button>
                            </div>
                        </div>
                    </div>


                    <div className="slip-section">
                        <div className="slip-section-head">
                            <h2>In the queue</h2>
                            <span className="count">2 books</span>
                        </div>

                        <div className="slip-card">
                            <div className="slip-date">
                                <span className="d">#2</span>
                                <span className="m">In line</span>
                            </div>

                            <div className="slip-book">
                            <div className="swatch" style={{background:"linear-gradient(155deg,#6b3d4b,#241419);"}}></div>
                            <div className="info">
                                <p className="title">The Cartographer's Daughter</p>
                                <p className="author">Iveta Novak</p>
                                <span className="call">FIC / NOV / 2017</span>
                            </div>
                        </div>

                        <span className="pill wait">Est. ready Sep 3</span>

                        <div className="slip-actions">
                            <button className="ghost">Cancel</button>
                        </div>
                    </div>


                    <div className="slip-card">
                        <div className="slip-date">
                            <span className="d">#5</span>
                            <span className="m">In line</span>
                        </div>

                        <div className="slip-book">
                            <div className="swatch" style={{background:"linear-gradient(155deg,#3d5a5a,#141c1c);"}}></div>
                            <div className="info">
                                <p className="title">Static &amp; Stars</p>
                                <p className="author">Femi Alaba</p>
                                <span className="call">SF / ALA / 2024</span>
                            </div>
                        </div>

                        <span className="pill wait">Est. ready Sep 14</span>

                        <div className="slip-actions">
                            <button className="ghost">Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
            </section>
        </>
    )
}

export default Hold