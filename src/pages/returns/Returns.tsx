import './Returns.css'
import ReturnedBook from '../../components/returned/ReturnedBook'

const  Returns = () => {
    return (
        <>
            <section className="account-hero">
                <div className="hero-eyebrow">Card № *** · No fines on this account</div>
                <h1 className="account-title">Everything you've <em>brought back</em></h1>
                <p className="account-note">Returning in person? Type the call number below and drop the book in the slot — we'll mark it back on the shelf right away.</p>

                <div className="scan-card">
                    <span className="scan-label">CALL NO.</span>
                    <input type="text" placeholder=" 209/276/20490" aria-label="Enter book number to return" />
                    <button className="go">Mark returned</button>
                </div>
            </section>

            <section className="slip-panel">
                <div className="slip-inner">
                    <div className="slip-section">

                        <div className="slip-section-head">
                            <h2>Returned this month</h2>
                            <span className="count">3 books</span>
                        </div>

                    {/* returned books should be returned here dymanically */}
                    <ReturnedBook />
                    
                    </div>

                    <div className="slip-section">
                        <div className="slip-section-head">
                            <h2>Earlier this year</h2>
                            <span className="count">9 books</span>
                        </div>

                        <div className="empty-state" style={{padding:"30px 20px;"}}>
                            <p style={{ maxWidth:"none;"}}>
                                Full history goes back to your card's opening date. <span style={{ textDecoration:"underline", cursor:"pointer" }}>Show all 9 →</span></p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Returns