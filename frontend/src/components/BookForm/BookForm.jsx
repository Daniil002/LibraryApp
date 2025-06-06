import "./BookForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch()

  const handdleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = {
        title,
        author,
      }
      dispatch(addBook(book))
      setTitle("");
      setAuthor("");
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handdleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;