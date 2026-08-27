import './Returns.css'

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


        </>
  
    )
}

export default Returns