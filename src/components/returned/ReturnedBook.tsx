const ReturnedBook = () => {
    return (
        <>
            <div className="slip-card">
                <div className="slip-date done">
                    <span className="d">21</span>
                    <span className="m">Aug</span>
                </div>

                <div className="slip-book">
                    <div className="swatch" style={{ background:"linear-gradient(155deg,#7a4b2e,#2a1c14);"}}></div>
                    <div className="info">
                        <p className="title">Salt &amp; Longitude</p>
                        <p className="author">R. K. Okafor</p>
                        <span className="call">HIST / OKA / 2018</span>
                    </div>
                </div>

                <span className="pill neutral">On time</span>
                <div className="slip-actions">
                <button>Borrow again</button>
                </div>
            </div>
        </>
    )
}

export default ReturnedBook;