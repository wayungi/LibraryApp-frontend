const Hold = () => {
    return (
        <>
            <section className="account-hero">
                <div className="hero-eyebrow">Card № 04471 · Holds expire after 2 days at the desk</div>
                <h1 className="account-title">Waiting for <em>their turn</em></h1>
                <p className="account-note">One is ready for pickup now. The others are still moving through the queue — we'll email you the moment they clear.</p>

                <div className="stat-row">
                    <div className="stat"><span className="num">01</span><span className="label">Ready for pickup</span></div>
                    <div className="stat"><span className="num">02</span><span className="label">In queue</span></div>
                    <div className="stat"><span className="num">04</span><span className="label">Avg. wait, days</span></div>
                </div>
            </section>
        </>
    )
}

export default Hold