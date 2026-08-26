import './Shelf.css'

const  Shelf = () => {
    return (
        <>
            <section className="account-hero">
                <div className="hero-eyebrow">Card № *** · Renewals unlimited</div>
                <h1 className="account-title">What's out under <em>your name</em></h1>
                <p className="account-note">Three books, one due sooner than it should be. Renew before the date if no one else is waiting on it.</p>

                <div className="stat-row">
                    <div className="stat"><span className="num">03</span><span className="label">Currently out</span></div>
                    <div className="stat"><span className="num">01</span><span className="label">Due this week</span></div>
                    <div className="stat"><span className="num">00</span><span className="label">Overdue</span></div>
                    <div className="stat"><span className="num">12</span><span className="label">Borrowed this year</span></div>
                </div>
            </section>
        </>
    )
}

export default Shelf