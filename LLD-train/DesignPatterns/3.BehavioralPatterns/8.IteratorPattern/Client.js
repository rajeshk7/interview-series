"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Library/Book");
var Library_1 = require("./Library/Library");
var Car_1 = require("./Showroom/Car");
var ShowRoom_1 = require("./Showroom/ShowRoom");
var books = [];
books.push(new Book_1.default("Design Patterns", "Gang of Four"));
books.push(new Book_1.default("Clean Code", "Robert C. Martin"));
books.push(new Book_1.default("Refactoring", "Martin Fowler"));
var library = new Library_1.default(books);
var iterator = library.createIterator();
while (iterator.hasNext()) {
    var book = iterator.next();
    console.log("\u001B[95m" /* Color.fgBrightMagenta */ + "Title: ".concat(book.getTitle(), ", Author: ").concat(book.getAuthor()) + "\u001B[0m" /* Color.reset */);
}
console.log("\n");
var cars = [];
cars.push(new Car_1.default("Toyota", 200));
cars.push(new Car_1.default("BMW", 300));
cars.push(new Car_1.default("Audi", 250));
var showRoom = new ShowRoom_1.default(cars);
var carIterator = showRoom.createIterator();
while (carIterator.hasNext()) {
    var car = carIterator.next();
    console.log("\u001B[96m" /* Color.fgBrightCyan */ + "Car: ".concat(car.getName(), ", Speed: ").concat(car.getPrice()) + "\u001B[0m" /* Color.reset */);
}
