"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Models/Square");
var Circle_1 = require("./Models/Circle");
var Triangle_1 = require("./Models/Triangle");
var ShapeInstanceFactory = /** @class */ (function () {
    function ShapeInstanceFactory() {
    }
    ShapeInstanceFactory.prototype.getShapeInstance = function (shapeType) {
        if (shapeType === "Square") {
            return new Square_1.default();
        }
        else if (shapeType === "Circle") {
            return new Circle_1.default();
        }
        else if (shapeType === "Triangle") {
            return new Triangle_1.default();
        }
        return null;
    };
    return ShapeInstanceFactory;
}());
exports.default = ShapeInstanceFactory;
