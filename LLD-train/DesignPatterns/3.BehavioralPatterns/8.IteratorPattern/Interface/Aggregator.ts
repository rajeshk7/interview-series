import Iterator from "./Iterator";

interface Aggregator {
    createIterator(): Iterator;
}

export default Aggregator;