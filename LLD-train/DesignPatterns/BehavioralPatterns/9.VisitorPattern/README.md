# Visitor Pattern

Refer: [Visitor Design Pattern](https://refactoring.guru/design-patterns/visitor)

## Intent
The intent of the Visitor Pattern is to define a new operation without changing the classes of the elements on which it operates. This pattern allows you to add further operations to objects without having to modify them.

## Problem It Solves
The Visitor Pattern solves the problem of adding new operations to existing object structures without modifying the structures. This is particularly useful in scenarios where you need to perform various unrelated operations on a group of objects, such as in compilers, interpreters, or document processing systems. By using the Visitor Pattern, you can make your code more flexible, maintainable, and easier to extend.