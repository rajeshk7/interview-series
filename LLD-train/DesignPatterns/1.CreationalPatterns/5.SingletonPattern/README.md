# Singleton Design Pattern

## Reference
[Refactoring Guru: Singleton](https://refactoring.guru/design-patterns/singleton)

## Intent
The Singleton is a creational design pattern that ensures a class has only one instance and provides a global point of access to it.

## Problem it Solves
The Singleton pattern addresses the issue of ensuring a class has a single instance, which is useful when:
- There must be exactly one instance of a class, and it must be accessible from a well-known access point.
- The single instance should be extensible by subclassing, and clients should be able to use an extended instance without modifying their code.