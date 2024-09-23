# Observer Pattern

Refer: [Observer Design Pattern](https://refactoring.guru/design-patterns/observer)

## Intent
The intent of the Observer Pattern is to define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically. This pattern is particularly useful for implementing distributed event-handling systems.

## Problem It Solves
The Observer Pattern solves the problem of maintaining consistency between related objects without making them tightly coupled. This is particularly useful in scenarios where an object needs to notify other objects about changes in its state, such as in event-driven systems, GUI frameworks, and real-time data feeds. By using the Observer Pattern, you can ensure that all dependent objects are kept in sync with the state of the subject.