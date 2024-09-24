# Memento Pattern

Refer: [Memento Design Pattern](https://refactoring.guru/design-patterns/memento)

## Intent
The intent of the Memento Pattern is to capture and externalize an object's internal state so that the object can be restored to this state later, without violating encapsulation. This pattern is particularly useful for implementing undo mechanisms.

## Problem It Solves
The Memento Pattern solves the problem of restoring an object to a previous state without exposing its internal structure. This is particularly useful in scenarios where you need to implement undo functionality, such as in text editors, transaction management, or game development. By using the Memento Pattern, you can make your code more flexible, maintainable, and easier to extend.