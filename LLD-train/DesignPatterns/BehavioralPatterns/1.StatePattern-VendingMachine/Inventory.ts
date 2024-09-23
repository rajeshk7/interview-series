import Item from './Model/Item';
import itemshelf from './Model/ItemShelf';


class Inventory {
    inventory: itemshelf[] = [];

    constructor(itemCount: number) {
        this.inventory = new Array(itemCount);
        this.initializeEmptyInventory();
    }

    initializeEmptyInventory() {
        let startCode: number = 101;
        for (let i = 0; i < this.inventory.length; i++) {
            this.inventory[i] = new itemshelf();
            this.inventory[i].setCode(startCode++);
            this.inventory[i].setIsSoldOut(false);
        }
    }

    getInventory(): itemshelf[] {
        return this.inventory;
    }

    setInventory(inventory: itemshelf[]): void {
        this.inventory = inventory;
    }

    addItem(item: Item, produceCode: Number): void {
        for(let i = 0; i < this.inventory.length; i++) {
            if(this.inventory[i].getCode() === produceCode) {
                if(this.inventory[i].getIsSoldOut()) {
                    console.log("Item is already present in the inventory");
                }
                else {
                    this.inventory[i].setItem(item);
                    this.inventory[i].setIsSoldOut(false);
                }
            }
        }
    }

    getItem(productCode: number): Item | null {
        for(let i = 0; i < this.inventory.length; i++) {
            if(this.inventory[i].getCode() === productCode) {
                if(this.inventory[i].getIsSoldOut()) {
                    console.log("Item is already present in the inventory");
                }
                else {
                    return this.inventory[i].getItem();
                }
            }
        }
        return null;
    }

    updateSoldOutItem(productCode: number): void {
        for(let i = 0; i < this.inventory.length; i++) {
            if(this.inventory[i].getCode() === productCode) {
                this.inventory[i].setIsSoldOut(true);
            }
        }
    }

}

export default Inventory;