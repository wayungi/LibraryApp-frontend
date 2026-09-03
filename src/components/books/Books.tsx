import { useEffect, useState } from "react";
import "./Book.css";
import api from "../../service/AxiosService";
import type { BookCategory } from "../../types/all.types";

const Books = () => {
    const [books, setBooks] = useState<BookCategory[]>([]);

    // demonstrated consumption of apis.
    useEffect(() => {
        async function fetchBooks() {
            try {
                const response = await api.post("", {
                    SERVICE: "bookService",
                    ACTION: "findAll",
                });
                setBooks(response.data.returnObject ?? []);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <>
            {books.map((bookCategory) =>
                bookCategory.books?.map((book) => (
                    <article className="book" key={book.id}>
                        <div
                            className="cover"
                            style={{
                                background: "linear-gradient(155deg,#3d5a52,#1c2e26)",
                            }}
                        >
                            <span
                                className={`stamp ${book.status?.toLowerCase()
                                    }`}
                            >
                                {book.status}
                            </span>

                            <span className="spine-title">
                                {bookCategory.category}
                            </span>
                        </div>

                        <div className="meta">
                            <p className="title">
                                {book.title}
                            </p>

                            <p className="author">
                                {bookCategory.authorsName}
                            </p>

                            <div className="row">
                                <span className="call">
                                    {book.isbn}
                                </span>

                                <button className="borrow-btn">
                                    {book.status}
                                </button>
                            </div>
                        </div>
                    </article>
                ))
            )}
        </>
    );
};

export default Books;