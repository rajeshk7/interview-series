## Proxy Pattern

## Reference
[Refactoring Guru: Singleton](https://refactoring.guru/design-patterns/proxy)

## Intent
The intent of the Proxy Pattern is to provide a surrogate or placeholder for another object to control access to it. This pattern is used to create a representative object that controls access to another object, which may be remote, expensive to create, or in need of securing.

## Problem it Solves
The Proxy Pattern solves the problem of controlling access to an object by acting as an intermediary. This can be useful in scenarios such as lazy initialization, access control, logging, or remote object access. By using a proxy, you can add an additional layer of control and functionality without changing the original object's code.