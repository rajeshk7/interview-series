import ConfigurationMemento from "./ConfigurationMemento";

class ConfigurationOriginator {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    createMemento(): ConfigurationMemento {
        return new ConfigurationMemento(this.height, this.width);
    }

    restore(memento: ConfigurationMemento) {
        this.height = memento.height;
        this.width = memento.width;
    }

}

export default ConfigurationOriginator;