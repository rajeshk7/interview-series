import Iterator from "../Interface/Iterator";

class BookIterator implements Iterator {
    index: number = 0;
    books: any[] = [];

    constructor(books: any[]) {
        this.books = books;
    }

    hasNext(): boolean {
        return this.index < this.books.length;
    }

    next(): any {
        return this.hasNext() ? this.books[this.index++] : null;
    }
}

export default BookIterator;