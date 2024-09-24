# Template Method Pattern

Refer: [Template Method Design Pattern](https://refactoring.guru/design-patterns/template-method)

## Intent
The intent of the Template Method Pattern is to define the skeleton of an algorithm in a method, deferring some steps to subclasses. This pattern lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.

## Problem It Solves
The Template Method Pattern solves the problem of code duplication by allowing common behavior to be defined in a base class while allowing subclasses to override specific steps of the algorithm. This is particularly useful in scenarios where you have multiple classes that share a common structure but differ in specific details, such as in data processing, game development, or user interface rendering. By using the Template Method Pattern, you can make your code more reusable, maintainable, and easier to extend.