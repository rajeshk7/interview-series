class Car   {
    private name: string;
    private model: string;
    private year: number;
    private lisencePlate: string;
    private rentalPricePerDay: number;
    private available: boolean;

    constructor(name: string, model: string, year: number, lisencePlate: string, rentalPricePerDay: number) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.lisencePlate = lisencePlate;
        this.rentalPricePerDay = rentalPricePerDay;
        this.available = true;
    }

    getName(): string {
        return this.name;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    getLisencePlate(): string {
        return this.lisencePlate;
    }

    getRentalPricePerDay(): number {
        return this.rentalPricePerDay;
    }

    isAvailable(): boolean {
        return this.available;
    }

    setAvailable(available: boolean): void {
        this.available = available;
    }
}

export default Car;