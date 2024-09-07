import RobotFactory from "./RobotFactory";

// Added Map definition using npm i @types/node       

const doggoRobo = RobotFactory.getRobot("RoboticDog");
doggoRobo.print(1, 2);

const humanRobo = RobotFactory.getRobot("RoboticHuman");
humanRobo.print(3, 4);

const doggoRobo2 = RobotFactory.getRobot("RoboticDog");
doggoRobo2.print(5, 6);

const humanRobo2 = RobotFactory.getRobot("RoboticHuman");
humanRobo2.print(7, 8);
