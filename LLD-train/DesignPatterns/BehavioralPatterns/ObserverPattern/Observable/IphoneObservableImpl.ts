import StockObservable from "./StockObservable";
import NotificationObserver from "../Observer/NotificationObserver";

class IphoneObservableImpl implements StockObservable {
    private stockCount: number = 0;
    private observers: NotificationObserver[] = [];

    add(observer: NotificationObserver): void {
        this.observers.push(observer);
    }

    remove(observer: NotificationObserver): void {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notifySubscribers(): void {
        this.observers.forEach((observer) => observer.update());
    }

    setStockCount(stockCount: number): void {
        this.stockCount = stockCount;
        this.notifySubscribers();
    }

    getStockCount(): number {
        return this.stockCount;
    }
}

export default IphoneObservableImpl;