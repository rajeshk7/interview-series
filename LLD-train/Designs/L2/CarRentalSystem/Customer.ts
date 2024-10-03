class Customer {
    private name : string;
    private contactNumber : string;
    private drivingLicenseNumber : string;

    constructor(name: string, contactNumber: string, drivingLicenseNumber: string) {
        this.name = name;
        this.contactNumber = contactNumber;
        this.drivingLicenseNumber = drivingLicenseNumber;
    }
}

export default Customer;