"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeInstanceFactory_1 = require("./ShapeInstanceFactory");
var shapeInstanceFactory = new ShapeInstanceFactory_1.default();
var square = shapeInstanceFactory.getShapeInstance("Square");
square.computeArea();
var circle = shapeInstanceFactory.getShapeInstance("Circle");
circle.computeArea();
var triangle = shapeInstanceFactory.getShapeInstance("Triangle");
triangle.computeArea();
