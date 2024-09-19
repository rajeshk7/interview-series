import ItemType from "../Schema/ItemType";

class Item {
    type: ItemType
    price: number

    constructor(type: ItemType, price: number) {
        this.type = type;
        this.price = price;
    }

    getType(): ItemType {
        return this.type;
    }

    getPrice(): number {
        return this.price;
    }

    setType(type: ItemType): void {
        this.type = type;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getName(): string {
        switch(this.type) {
            case ItemType.COKE:
                return "Coke";
            case ItemType.PEPSI:
                return "Pepsi";
            case ItemType.WATER:
                return "Water";
            case ItemType.JUICE:
                return "Juice";
            default:
                return "Invalid item";
        }
    }
  
}

export default Item;
