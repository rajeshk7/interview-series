# Builder Design Pattern

## Reference
[Refactoring Guru: Builder](https://refactoring.guru/design-patterns/builder)

## Intent
The Builder is a creational design pattern that allows you to construct complex objects step by step. It separates the construction of a complex object from its representation, allowing the same construction process to create various representations.

## Problem it Solves
The Builder pattern addresses the issue of constructing complex objects that require multiple steps or configurations. This is useful when:
- The construction process must allow different representations for the object being built.
- The construction process must be independent of the parts that make up the object.