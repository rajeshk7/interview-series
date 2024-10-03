import Car from "./Car";
import Customer from "./Customer";

class Reservation {
    private reservationId : string;
    private customer : Customer;
    private car : Car;
    private startDate : Date;
    private endDate : Date;
    private totalPrice : number;

    constructor(reservationId: string, customer: Customer, car: Car, startDate: Date, endDate: Date) {
        this.reservationId = reservationId;
        this.customer = customer;
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice(): number {
        const diffInTime = this.endDate.getTime() - this.startDate.getTime();
        const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
        return diffInDays * this.car.getRentalPricePerDay();
    }

    getReservationId(): string {
        return this.reservationId;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getCar(): Car {
        return this.car;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }
}

export default Reservation;