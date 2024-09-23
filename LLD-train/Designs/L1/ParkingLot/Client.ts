import Level from "./Level";
import ParkingLot from "./ParkingLot";
import Car from "./Models/Car";
import Motorbike from "./Models/Motorbike";
import Truck from "./Models/Truck";

const parkingLotInstance = ParkingLot.getInstance()
parkingLotInstance.addLevel(new Level(1, 10))
parkingLotInstance.addLevel(new Level(2, 10))

const car1 = new Car("1234")
const bike1 = new Motorbike("2345")
const truck1 = new Truck("3456")

parkingLotInstance.parkVehicle(car1)
parkingLotInstance.parkVehicle(truck1)
parkingLotInstance.parkVehicle(bike1)

parkingLotInstance.displayAvailability()

parkingLotInstance.unparkVehicle(car1)
parkingLotInstance.unparkVehicle(truck1)

parkingLotInstance.displayAvailability()