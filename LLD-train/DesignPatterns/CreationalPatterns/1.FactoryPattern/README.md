## Factory Method

Refer: [Factory Method Design Pattern](https://refactoring.guru/design-patterns/factory-method)

**Intent**: Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

**Problem it Solves**: The Factory Method pattern addresses the issue of creating objects without specifying the exact class of object that will be created. This is particularly useful when the exact type and dependencies of the objects are not known until runtime, or when the creation process involves complex logic that should not be duplicated across the codebase.**