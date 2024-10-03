import Car from "./Car";
import Reservation from "./Reservation";
import PaymentProcessor from "./Payment/PaymentProcessor";
import CreditCardPaymentProcessor from "./Payment/CreditCardPaymentProcessor";
import Customer from "./Customer";

class RentalSystem {
    private static instance : RentalSystem;
    private cars : Map<string, Car>;
    private revserations : Map<string, Reservation>;
    private paymentProcessor : PaymentProcessor;

    // Should be concurrent hashmap for thread safety
    private constructor() {
        this.cars = new Map();
        this.revserations = new Map();
        this.paymentProcessor = new CreditCardPaymentProcessor();
    }

    // Should be synchronized for thread safety
    static getInstance(): RentalSystem {
        if (!this.instance) {
            this.instance = new RentalSystem();
        }
        return this.instance;
    }

    addCar(car: Car): void {
        this.cars.set(car.getLisencePlate(), car);
    }

    removeCar(lisencePlate: string): void {
        this.cars.delete(lisencePlate);
    }

    searchCar(make: string, model: string, startDate: Date, endDate: Date): Car[] {
        const cars = Array.from(this.cars.values());
        return cars.filter(car =>  {
            if(car.getName() === make && car.getModel() === model) {
                for( const curCar of this.cars.values()) {
                    if (curCar.getLisencePlate() === car.getLisencePlate()) {
                        if (curCar.isAvailable()) {
                            return this.isCarAvailable(curCar, startDate, endDate);
                        }
                    }
                }
            }
            return false;
        });
    }

    isCarAvailable(car: Car, startDate: Date, endDate: Date): boolean {
        for (const reservation of this.revserations.values()) {
            if (reservation.getCar().getLisencePlate() === car.getLisencePlate()) {
                if (startDate >= reservation.getStartDate() && startDate <= reservation.getEndDate()) {
                    return false;
                }
                if (endDate >= reservation.getStartDate() && endDate <= reservation.getEndDate()) {
                    return false;
                }
            }
        }
        return true;
    }

    makeReservation(customer: Customer, car: Car, startDate: Date, endDate: Date): Reservation {
        if (!this.isCarAvailable(car, startDate, endDate)) {
            console.log("Car is not available for the given dates");
            return null as any;
        }
        const reservationId = this.generateReservationId();
        const reservation = new Reservation(reservationId ,customer, car, startDate, endDate);
        this.revserations.set(reservationId, reservation);
        car.setAvailable(false);
        return reservation;
    }

    cancelReservation(reservationId: string): void {
        const reservation = this.revserations.get(reservationId);
        if (reservation) {
            reservation.getCar().setAvailable(true);
            this.revserations.delete(reservationId);
        }
    }

    processPayment(reservation: Reservation): void {
        this.paymentProcessor.PaymentProcessor(reservation.getTotalPrice());
    }

    generateReservationId(): string {
        return "RES_" + Math.random().toString(36).substring(7);
    }
}

export default RentalSystem;