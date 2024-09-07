import WeighingMachine from "./WeighingMachine";

class WeighingMachineForKids implements WeighingMachine {

    getWeightInPounds(): number {
        return Math.random() * 30;
    }

}

export default WeighingMachineForKids;