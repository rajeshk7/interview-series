import Vehicle from "./Models/Vehicle";
import Level from "./Level";

class ParkingLot    {
    private static instance: ParkingLot;
    private levels: Level[];

    constructor()   {
        this.levels = new Array()
    }

    // It should be synchronized in Java
    static getInstance()    {
        if(this.instance == null)   {
            this.instance = new ParkingLot()
        }
        return this.instance
    }

    addLevel(level: Level)  {
        this.levels.push(level)
    }

    parkVehicle(vehicle: Vehicle): boolean {
        for( const level of this.levels )   {
            if(level.parkVehicle(vehicle))
                return true
        }
        return false
    }

    unparkVehicle(vehicle: Vehicle): boolean {
        for( const level of this.levels )   {
            if(level.unparkVehicle(vehicle))
                return true
        }
        return false
    }

    displayAvailability()   {
        for( const level of this.levels )
            level.displayAvailability()
    } 
}

export default ParkingLot;