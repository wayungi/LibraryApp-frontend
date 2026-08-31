import './Book.css'

const Book = () => {
    return (
        <article className="book">
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
        </article>
    )
}


export default Book;