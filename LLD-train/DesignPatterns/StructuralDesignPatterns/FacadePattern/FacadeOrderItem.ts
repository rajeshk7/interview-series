import Invoice from './Models/Invoice';
import Product from './Models/Product';
import Payment from './Models/Payment';
import Notification from './Models/Notification';
import Color from '../../../ConsoleColors'

class OrderFacade {
    invoice: Invoice;
    product: Product;
    payment: Payment;
    notification: Notification;

    constructor()   {
        this.invoice = new Invoice();
        this.product = new Product();
        this.payment = new Payment();
        this.notification = new Notification();
    }

    placeOrder() {
        const product = this.product.getProduct();
        this.invoice.printInvoice();
        this.payment.makePayment();
        this.notification.sendNotification();
        console.log(Color.fgBrightGreen,'Order placed successfully');
    }
}

export default OrderFacade;