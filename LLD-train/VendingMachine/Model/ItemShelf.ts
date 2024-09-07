import Item from './Item';

class ItemShelf {
    code: number
    isSoldOut: boolean
    item: Item

    getCode(): number {
        return this.code;
    }

    getItem(): Item {
        return this.item;
    }

    getIsSoldOut(): boolean {
        return this.isSoldOut;
    }

    setIsSoldOut(isSoldOut: boolean): void {
        this.isSoldOut = isSoldOut;
    }

    setItem(item: Item): void {
        this.item = item;
    }

    setCode(code: number): void {
        this.code = code;
    }
}

export default ItemShelf;