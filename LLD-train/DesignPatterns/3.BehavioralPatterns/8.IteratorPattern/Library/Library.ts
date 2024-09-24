import Book from "./Book";
import Iterator from "../Interface/Iterator";
import BookIterator from "./BookIterator";
import Aggregator from "../Interface/Aggregator";

class Library implements Aggregator {
    private books: Book[] = [];

    constructor(books: Book[] = []) {
        this.books = books;
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): Iterator {
        return new BookIterator(this.books);
    }
}

export default Library;