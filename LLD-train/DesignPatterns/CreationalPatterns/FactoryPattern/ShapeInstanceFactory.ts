import Square from "./Models/Square";
import Circle from "./Models/Circle";
import Triangle from "./Models/Triangle";
import Shape from "./Interface/Shape";

class ShapeInstanceFactory {

    public getShapeInstance(shapeType: string): Shape {
        if (shapeType === "Square") {
            return new Square();
        } else if (shapeType === "Circle") {
            return new Circle();
        }
        else if (shapeType === "Triangle") {
            return new Triangle();
        }
        return null as any;
    }
    
}

export default ShapeInstanceFactory;