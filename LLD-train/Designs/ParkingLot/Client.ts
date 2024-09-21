import ParkingSlot from "./ParkingSlot";
import ParkingSlotType from "./Models/ParkingSlotType";
import ParkingFloor from "./ParkingFloor";
import ParkingLot from "./ParkingLot";
import Vehicle from "./Models/Vehicle";
import VehicleCategory from "./Models/VehicleCategory";
import Ticket from "./Models/Ticket";

const parkingLotName = "ParkingLot";
const parkingLotAddress = "123, ABC Street, XYZ City";

const allSlots = new Map<ParkingSlotType, Map<string, ParkingSlot>>();
const compactSlot = new Map<string, ParkingSlot>();
compactSlot.set("1", new ParkingSlot("1", ParkingSlotType.Compact));
compactSlot.set("2", new ParkingSlot("2", ParkingSlotType.Compact));
allSlots.set(ParkingSlotType.Compact, compactSlot);

const twoWheelerSlot = new Map<string, ParkingSlot>();
twoWheelerSlot.set("1", new ParkingSlot("1", ParkingSlotType.TwoWheeler));
twoWheelerSlot.set("2", new ParkingSlot("2", ParkingSlotType.TwoWheeler));
allSlots.set(ParkingSlotType.TwoWheeler, twoWheelerSlot);

const largeSlot = new Map<string, ParkingSlot>();
largeSlot.set("1", new ParkingSlot("1", ParkingSlotType.Large));
largeSlot.set("2", new ParkingSlot("2", ParkingSlotType.Large));
allSlots.set(ParkingSlotType.Large, largeSlot);

const parkingFloor = new ParkingFloor("1", allSlots);
const parkingFloors: ParkingFloor[] = [parkingFloor];
parkingFloors.push(parkingFloor);

const parkingLot = ParkingLot.getInstance(parkingLotName, parkingLotAddress, parkingFloors);

const vehicle = new Vehicle("KA-01-HH-1234", VehicleCategory.Compact);

const ticket: Ticket = parkingLot.assignTicket(vehicle) as Ticket;

setTimeout(() => {
    console.log("Price " + parkingLot.scanAndPay(ticket));
}, 1000);

