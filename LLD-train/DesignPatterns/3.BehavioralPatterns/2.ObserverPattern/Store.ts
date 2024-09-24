import IphoneObservableImpl from "./Observable/IphoneObservableImpl";
import NotificationObserver from "./Observer/NotificationObserver";
import EmailAlertObserverImpl from "./Observer/EmailAlertObserverImpl";
import MobileAlertObserverImpl from "./Observer/MobileAlertObserverImpl";

const iPhoneObservable = new IphoneObservableImpl();

const notificationAlertObserver1: NotificationObserver = new EmailAlertObserverImpl("abc@xyz.com", iPhoneObservable);
const notificationAlertObserver2: NotificationObserver = new MobileAlertObserverImpl("1234567890", iPhoneObservable);
const notificationAlertObserver3: NotificationObserver = new MobileAlertObserverImpl("0987654321", iPhoneObservable);

iPhoneObservable.add(notificationAlertObserver1);
iPhoneObservable.add(notificationAlertObserver2);
iPhoneObservable.add(notificationAlertObserver3);

iPhoneObservable.setStockCount(10);