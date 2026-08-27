const LibraryCard = () => {
    return (
        <>
        <div className="auth-visual">
            <div className="library-card">
            <div className="lc-head">
                <span className="lc-brand">Corps Library</span>
                <span className="lc-type">Member Card</span>
            </div>
            <div className="lc-name">Reader, Card holder</div>
            <div className="lc-number">№ *** &nbsp;·&nbsp; Member since 2022</div>
            <div className="lc-foot">
                <span>Lending Library</span>
                <span>5 holds</span>
            </div>
            <span className="lc-stamp">Active</span>
            </div>
            <p className="caption">Insert your card number below to enter the reading room</p>
        </div>
        </>
    )
}

export default LibraryCard