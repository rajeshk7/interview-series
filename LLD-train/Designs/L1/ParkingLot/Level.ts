import Vehicle from "./Models/Vehicle";
import VehicleType from "./Models/VehicleType";
import ParkingSpot from "./ParkingSpot";

class Level {
    private floor: number;
    private parkingSpots: ParkingSpot[];

    constructor(floor: number, numSport: number) {
        this.floor = floor;
        this.parkingSpots = new Array(numSport);

        const spotForBikes = .5 * numSport;
        const spotForCars = .3 * numSport;

        for(let i = 0; i < spotForBikes; i++) {
            this.parkingSpots[i] = new ParkingSpot(i, VehicleType.MOTORBIKE);
        }

        for(let i = spotForBikes; i < spotForBikes + spotForCars; i++) {
            this.parkingSpots[i] = new ParkingSpot(i, VehicleType.CAR);
        }

        for(let i = spotForBikes + spotForCars; i < numSport; i++) {
            this.parkingSpots[i] = new ParkingSpot(i, VehicleType.TRUCK);
        }

        console.log(`Level ${floor} created with ${numSport} spots`);
        console.log(`Bikes: ${spotForBikes}, Cars: ${spotForCars}, Trucks: ${numSport - spotForBikes - spotForCars}`);
    }

    // It should be synchronized in Java
    parkVehicle(vehicle: Vehicle) {
        for( const spot of this.parkingSpots) {
            if(spot.isAvailable() && spot.getVehicleType() === vehicle.getType()) {
                spot.parkVehicle(vehicle);
                return true;
            }
        }
        return false;
    }

    // It should be synchronized in Java
    unparkVehicle(vehicle: Vehicle) {
        for( const spot of this.parkingSpots) {
            if(!spot.isAvailable() && spot.getVehicle() === vehicle) {
                spot.unparkVehicle();
                return true;
            }
        }
        return false;
    }

    displayAvailability() {
        console.log(`Level ${this.floor} availability:`);
        for( const spot of this.parkingSpots) 
            console.log(`Spot ${spot.getSpotNumber()} - ${spot.isAvailable() ? 'Available' : 'Occupied'} - ${spot.getVehicleType()}`);
    }
}

export default Level;