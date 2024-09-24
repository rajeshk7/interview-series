# Mediator Pattern

Refer: [Mediator Design Pattern](https://refactoring.guru/design-patterns/mediator)

## Intent
The intent of the Mediator Pattern is to define an object that encapsulates how a set of objects interact. This pattern promotes loose coupling by keeping objects from referring to each other explicitly and lets you vary their interaction independently.

## Problem It Solves
The Mediator Pattern solves the problem of tight coupling between a set of interacting objects by introducing a mediator object that manages the communication between them. This is particularly useful in scenarios where you have complex interactions between multiple objects, such as in GUI components, communication protocols, or workflow systems. By using the Mediator Pattern, you can make your code more flexible, maintainable, and easier to extend.