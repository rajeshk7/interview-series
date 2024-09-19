import NotificationObserver from "../Observer/NotificationObserver";

interface StockObservable {
    add(observer: NotificationObserver): void;
    remove(observer: NotificationObserver): void;
    notifySubscribers(): void;
    setStockCount(stockCount: number): void;
    getStockCount(): number;
}

export default StockObservable;