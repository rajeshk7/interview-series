# Chain of Responsibility Pattern

Refer: [Chain of Responsibility Design Pattern](https://refactoring.guru/design-patterns/chain-of-responsibility)

## Intent
The intent of the Chain of Responsibility Pattern is to avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. This pattern chains the receiving objects and passes the request along the chain until an object handles it.

## Problem It Solves
The Chain of Responsibility Pattern solves the problem of coupling the sender of a request to its receiver by allowing multiple objects to handle the request without knowing which object will handle it. This is particularly useful in scenarios where a request can be handled by different handlers in a flexible and dynamic way, such as in event handling, logging, or processing workflows. By using the Chain of Responsibility Pattern, you can make your code more flexible, maintainable, and easier to extend.