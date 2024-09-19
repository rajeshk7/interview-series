import NotificationObserver from "./NotificationObserver";
import StockObservable from "../Observable/StockObservable";

class MobileAlertObserverImpl implements NotificationObserver {
    mobile: string;
    observable: StockObservable;

    constructor(mobile: string, observable: StockObservable) {
        this.mobile = mobile;
        this.observable = observable;
    }

    update(): void {
        console.log("MobileAlertObserverImpl: ", this.mobile, " - Notification received: ", this.observable.getStockCount());
    }

    sendSMS(): void {
        console.log("SMS sent to: ", this.mobile);
    }
}

export default MobileAlertObserverImpl;