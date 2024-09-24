# Strategy Pattern

Refer: [Strategy Design Pattern](https://refactoring.guru/design-patterns/strategy)

## Intent
The intent of the Strategy Pattern is to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern lets the algorithm vary independently from clients that use it. It is particularly useful for selecting an algorithm at runtime.

## Problem It Solves
The Strategy Pattern solves the problem of having multiple conditional statements for selecting algorithms by encapsulating each algorithm in a separate class. This is particularly useful in scenarios where you need to switch between different algorithms or behaviors at runtime, such as in sorting, filtering, or validation operations. By using the Strategy Pattern, you can make your code more flexible, maintainable, and easier to extend.