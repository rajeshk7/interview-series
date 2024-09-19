import ICommand from "./Interface/ICommand";
import Color from '../../../ConsoleColors'

class RemoteControl {
    currentCommand: ICommand;
    commandStack: ICommand[];

    constructor() {
        this.commandStack = [];
    }

    setCommand(command: ICommand) {
        this.currentCommand = command;
    }

    pressButton() {
        console.log(Color.fgBrightRed + "Pressing button on remote control" + Color.reset);
        this.commandStack.push(this.currentCommand);
        this.currentCommand.execute();
    }

    undo() {
        if (this.commandStack.length > 0) {
            console.log(Color.fgBrightRed + "Undoing last command" + Color.reset);
            let command = this.commandStack.pop() as ICommand;
            command.undo();
        } else {
            console.log(Color.fgBrightRed + "No commands to undo" + Color.reset);
        }
    }

}

export default RemoteControl;