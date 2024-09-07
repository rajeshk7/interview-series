class MapEntry {
    key: string;
    value: any;
    next: MapEntry | null;

    constructor(key: string, value: any, next: MapEntry | null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }

    public getKey(): string {
        return this.key;
    }

    public getValue(): any {
        return this.value;
    }

    public setValue(value: any): void {
        this.value = value;
    }

    public getNext(): MapEntry | null {
        return this.next;
    }
}

export default MapEntry;