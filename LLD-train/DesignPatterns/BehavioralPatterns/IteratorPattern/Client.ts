import Book from "./Library/Book";
import Color from "../../../ConsoleColors"
import Library from "./Library/Library";

import Car from "./Showroom/Car";
import ShowRoom from "./Showroom/ShowRoom";

const books: Book[] = [];
books.push(new Book("Design Patterns", "Gang of Four"));
books.push(new Book("Clean Code", "Robert C. Martin"));
books.push(new Book("Refactoring", "Martin Fowler"));

const library = new Library(books);
const iterator = library.createIterator();

while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(Color.fgBrightMagenta + `Title: ${book.getTitle()}, Author: ${book.getAuthor()}` + Color.reset);
}

console.log("\n");

const cars: Car[] = [];
cars.push(new Car("Toyota", 200));
cars.push(new Car("BMW", 300));
cars.push(new Car("Audi", 250));

const showRoom = new ShowRoom(cars);
const carIterator = showRoom.createIterator();

while (carIterator.hasNext()) {
    const car = carIterator.next();
    console.log(Color.fgBrightCyan + `Car: ${car.getName()}, Speed: ${car.getPrice()}` + Color.reset);
}