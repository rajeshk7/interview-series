class Context {
    contextMap: Map<string, any> = new Map<string, any>();

    put(key: string, value: any) {
        this.contextMap.set(key, value);
    }

    get(key: string): any {
        return this.contextMap.get(key);
    }
}

export default Context;