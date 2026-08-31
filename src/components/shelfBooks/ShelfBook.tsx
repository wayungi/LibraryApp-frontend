import './ShelfBook.css'

const ShelfBook = () => {
    return (
        <>
            <div className="slip-card">
                <div className="slip-date overdue">
                    <span className="d">29</span>
                    <span className="m">Aug</span>
                </div>

                <div className="slip-book">
                    <div className="swatch" style={{background:"linear-gradient(155deg,#2e5a4b,#12211b);"}}></div>
                    <div className="info">
                        <p className="title">The Quiet Ledger</p>
                        <p className="author">Tomas Herrera</p>
                        <span className="call">ISBN</span>
                    </div>
                </div>

                <span className="pill warn" >Due in 3 days</span>

                <div className="slip-actions">
                    <button className="primary">Renew</button>
                    <button className="ghost">Return</button>
                </div>
            </div>
        </>
    )
}

export default ShelfBook;



{/* 
                <div className="slip-card">
                    <div className="slip-date">
                        <span className="d">09</span>
                        <span className="m">Sep</span>
                    </div>

                    <div className="slip-book">
                        <div className="swatch" style={{background:"linear-gradient(155deg,#3d5a52,#1c2e26);"}}></div>
                        <div className="info">
                            <p className="title">The Undertow</p>
                            <p className="author">Marguerite Feld</p>
                            <span className="call">FIC / FEL / 2021</span>
                        </div>
                    </div>

                    <span className="pill ok">Renewed once</span>
                    <div className="slip-actions">
                        <button>Renew</button>
                        <button className="ghost">Return</button>
                    </div>
                </div> */}



                 {/* <div className="slip-card">
                            <div className="slip-date">
                                <span className="d">12</span>
                                <span className="m">Sep</span>
                            </div>

                            <div className="slip-book">
                                <div className="swatch" style={{background:"linear-gradient(155deg,#4b3d6b,#1c1a2e);"}}></div>
                                <div className="info">
                                    <p className="title">Nine Winters</p>
                                    <p className="author">Ilya Marchenko</p>
                                    <span className="call">SF / MAR / 2023</span>
                                </div>
                            </div>

                            <span className="pill ok">On track</span>

                            <div className="slip-actions">
                                <button>Renew</button>
                                <button className="ghost">Return</button>
                            </div>
                            
                        </div> */}