import NotificationObserver from "./NotificationObserver";
import StockObservable from "../Observable/StockObservable";

class EmailAlertObserverImpl implements NotificationObserver {
    email: string;
    observable: StockObservable;

    constructor(email: string, observable: StockObservable) {
        this.email = email;
        this.observable = observable;
    }

    update(): void {
        console.log("EmailAlertObserverImpl: ", this.email, " - Notification received: ", this.observable.getStockCount());
    }

    sendEmail(): void {
        console.log("Email sent to: ", this.email);
    }
}

export default EmailAlertObserverImpl;