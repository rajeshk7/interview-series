import ConfigurationMemento from "./ConfigurationMemento";

class ConfigurationCareTaker {
    history: ConfigurationMemento[] = [];

    addMemento(memento: ConfigurationMemento) {
        this.history.push(memento);
    }

    undo(): ConfigurationMemento | undefined {
        if (this.history.length === 0) {
            return undefined;
        }
        return this.history.pop();
    }
}

export default ConfigurationCareTaker;