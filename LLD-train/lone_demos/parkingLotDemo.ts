enum VehicleType {
    CAR,
    TRUCK,
    JEEP
}

class Vehicle {
    name: string;
    type: VehicleType

    constructor(name: string, type: VehicleType) {
        this.name = name
        this.type = type
    }
}

class Car extends Vehicle {
    constructor(name: string)   {
        super(name, VehicleType.CAR)
    }
}

class Truck extends Vehicle {
    constructor(name: string)   {
        super(name, VehicleType.TRUCK)
    }
}

class Jeep extends Vehicle {
    constructor(name: string) {
        super(name, VehicleType.JEEP)
    }
}

class ParkingSlot {
    type: VehicleType
    vehicle: Vehicle | null = null
    id: number

    constructor(type: VehicleType, number: number)   {
        this.type = type
        this.id = number
    }

    isAvailable() {
        return this.vehicle == null
    }

    parkVehicle(vehicle: Vehicle): Boolean    {
        if(this.type == vehicle.type && this.vehicle == null)   {
            this.vehicle = vehicle
            return true
        }
        return false
    }

    unparkVehicle(): Boolean {
        if(this.vehicle != null)    {
            this.vehicle = null
            return true
        }
        return false
    }
}

class Level {
    id: number
    slots: ParkingSlot[]

    constructor(id: number, totalSlots: number) {
        this.id = id
        this.slots = new Array(totalSlots)

        const totalCars = Math.floor(0.5 * totalSlots)
        const totalJeeps = Math.floor(0.3 * totalSlots)
        console.log("Total " + totalCars + " " + totalJeeps + " " + (totalSlots - totalCars - totalJeeps))
        let index = 0

        for( ; index < totalCars ; index++ )
            this.slots[index] = new ParkingSlot(VehicleType.CAR, this.id + index)
    
        for( ; index < totalJeeps + totalCars ; index++ )
            this.slots[index] = new ParkingSlot(VehicleType.JEEP, this.id + index)
    
        for( ; index < totalSlots ; index++ )
            this.slots[index] = new ParkingSlot(VehicleType.TRUCK, this.id + index)
    }

    parkVehicle(vehicle: Vehicle): Boolean   {
        for( const slot of this.slots )
            if(slot.isAvailable() && slot.type == vehicle.type)
                return slot.parkVehicle(vehicle)
        return false
    }

    unparkVehicle(vehcile: Vehicle): Boolean {
        for( const slot of this.slots )
            if(slot.vehicle == vehcile)
                return slot.unparkVehicle()
        return false
    }

    displaySlots(): void {
        console.log(`Level ${this.id} availability:`);
        for( const spot of this.slots) 
            console.log(`Spot ${spot.id} - ${spot.isAvailable() ? 'Available' : 'Occupied'} - ${spot.type}`);
    }
}

class ParkingLot {
    static instance: ParkingLot
    levels: Level[] = []

    static getInstance(): ParkingLot {
        if(this.instance == null)
            this.instance = new ParkingLot()
        return this.instance
    }

    addLevel(id: number, capacity: number)  {
        this.levels.push(new Level(id, capacity))
    }

    parkVehicle(vehcile: Vehicle): void {
        for( const level of this.levels )
            if(level.parkVehicle(vehcile))  {
                console.log(" Vehicle parked at level " + level.id)
                return
            }
        console.log("Cannot park vehicle")
    }

    unparkVehcile(vehcile: Vehicle): void {
        for( const level of this.levels )
            if(level.unparkVehicle(vehcile))    {
                console.log("Unparked from level " + level.id)
                return
            }
        console.log("Not able to unpark it ")
    }

    displayCapacity() {
        for( const level of this.levels )
            level.displaySlots()
    }
}

const parkingLot = ParkingLot.getInstance()

const car = new Car("Bolero")
const truck = new Truck("Tata")
const jeep = new Jeep("Compass")

parkingLot.addLevel(0, 5)
parkingLot.addLevel(1, 5)

parkingLot.parkVehicle(car)
parkingLot.parkVehicle(truck)
parkingLot.parkVehicle(jeep)

parkingLot.displayCapacity()

parkingLot.unparkVehcile(car)

parkingLot.displayCapacity()