import ShapeInstanceFactory from "./ShapeInstanceFactory";

const shapeInstanceFactory = new ShapeInstanceFactory();

const square = shapeInstanceFactory.getShapeInstance("Square");
square.computeArea();

const circle = shapeInstanceFactory.getShapeInstance("Circle");
circle.computeArea();

const triangle = shapeInstanceFactory.getShapeInstance("Triangle");
triangle.computeArea();