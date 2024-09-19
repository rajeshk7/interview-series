import WeighingMachine from "../Adaptee/WeighingMachine";
import WeightMachineAdapter from "./WeighingMachineAdapter";

class WeighingMachineAdapterImpl extends WeightMachineAdapter {

    weighingMachine: WeighingMachine;

    constructor(weighingMachine: WeighingMachine) {
        super();
        this.weighingMachine = weighingMachine;
    }

    getWeightInKg(): number {
        return this.weighingMachine.getWeightInPounds() * 0.453592;
    }
}

export default WeighingMachineAdapterImpl;