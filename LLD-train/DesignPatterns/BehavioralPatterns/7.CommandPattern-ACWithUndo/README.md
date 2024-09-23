# Command Pattern

Refer: [Command Design Pattern](https://refactoring.guru/design-patterns/command)

## Intent
The intent of the Command Pattern is to encapsulate a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. This pattern also provides support for undoable operations.

## Problem It Solves
The Command Pattern solves the problem of coupling the sender of a request to its receiver by encapsulating the request as an object. This is particularly useful in scenarios where you need to parameterize objects with operations, delay the execution of a request, or support undoable operations, such as in GUI buttons, transaction management, or task scheduling. By using the Command Pattern, you can make your code more flexible, maintainable, and easier to extend.