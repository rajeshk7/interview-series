import WeighingMachineForKids from "../Adaptee/WeighingMachineForKids";
import WeighingMachineAdapterImpl from "../Adapter/WeighingMachineAdapterImpl";
import Color from "../../../../ConsoleColors";

const weighingMachineAdapter = new WeighingMachineAdapterImpl(new WeighingMachineForKids());
console.log(`${Color.fgBrightBlue}` + weighingMachineAdapter.getWeightInKg());