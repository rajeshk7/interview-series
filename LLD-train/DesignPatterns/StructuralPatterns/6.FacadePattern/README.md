# Bridge Pattern

## Reference
[Refactoring Guru: Singleton](https://refactoring.guru/design-patterns/facade)

## Intent
The intent of the Bridge Pattern is to decouple an abstraction from its implementation so that the two can vary independently. This pattern helps in avoiding a permanent binding between an abstraction and its implementation, making it easier to extend and maintain the code.

## Problem It Solves
The Bridge Pattern solves the problem of having a rigid and tightly coupled code structure by separating the abstraction and implementation into different class hierarchies. This allows for more flexibility and scalability, as changes to the abstraction or implementation do not affect each other. It is particularly useful when dealing with complex systems that require multiple variations of an abstraction and its implementation.