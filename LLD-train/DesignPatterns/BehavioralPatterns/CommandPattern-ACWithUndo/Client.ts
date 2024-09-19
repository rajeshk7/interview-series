import TurnAcOff from "./Commands/turnAcOff";
import TurnAcOn from "./Commands/turnAcOn";
import IncreaseTemperature from "./Commands/IncreaseTemperature";
import DecreaseTemperature from "./Commands/DecreaseTemperature";
import AirConditioner from "./Receiver";
import RemoteControl from "./Invoker";

const airCOnditioner : AirConditioner = new AirConditioner();
const remoteControl : RemoteControl = new RemoteControl();

remoteControl.setCommand(new TurnAcOn(airCOnditioner));
remoteControl.pressButton();

remoteControl.setCommand(new IncreaseTemperature(airCOnditioner));
remoteControl.pressButton();

remoteControl.setCommand(new DecreaseTemperature(airCOnditioner));
remoteControl.pressButton();

remoteControl.setCommand(new TurnAcOff(airCOnditioner));
remoteControl.pressButton();