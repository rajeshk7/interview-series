import ConfigurationCareTaker from "./ConfigurationCareTaker";
import ConfigurationMemento from "./ConfigurationMemento";
import ConfigurationOriginator from "./ConfigurationOriginator";

const careTaker: ConfigurationCareTaker = new ConfigurationCareTaker();
const originatorObject: ConfigurationOriginator = new ConfigurationOriginator(5, 5);
const snapshot1: ConfigurationMemento = originatorObject.createMemento();
careTaker.addMemento(snapshot1);

originatorObject.setHeight(10);
originatorObject.setWidth(10);

const snapshot2: ConfigurationMemento = originatorObject.createMemento();
careTaker.addMemento(snapshot2);

originatorObject.setHeight(15);
originatorObject.setWidth(15);

const snapshot3: ConfigurationMemento = originatorObject.createMemento();
careTaker.addMemento(snapshot3);

originatorObject.setHeight(115);
originatorObject.setWidth(115);

console.log("Current Height: ", originatorObject.height);
console.log("Current Width: ", originatorObject.width);

originatorObject.restore(careTaker.undo() as ConfigurationMemento);

console.log("Height after undo: ", originatorObject.height);
console.log("Width after undo: ", originatorObject.width);