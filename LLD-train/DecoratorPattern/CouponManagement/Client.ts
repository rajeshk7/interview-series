import Color from "../../ConsoleColors"
import ShoppingCart from "./ShoppingCart";
import BookItem from "./Implementation/BookItem";
import ClothingItem from "./Implementation/ClothingItem";

const item1 = new BookItem("The Catcher in the Rye", 10);
const item2 = new ClothingItem("T-shirt", 20);

const cart = new ShoppingCart();

cart.addTOCart(item1);
cart.addTOCart(item2);

console.log(Color.fgBrightMagenta  + cart.getTotalPrice());