"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.commandStack = [];
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.currentCommand = command;
    };
    RemoteControl.prototype.pressButton = function () {
        console.log("\u001B[91m" /* Color.fgBrightRed */ + "Pressing button on remote control" + "\u001B[0m" /* Color.reset */);
        this.commandStack.push(this.currentCommand);
        this.currentCommand.execute();
    };
    RemoteControl.prototype.undo = function () {
        if (this.commandStack.length > 0) {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "Undoing last command" + "\u001B[0m" /* Color.reset */);
            var command = this.commandStack.pop();
            command.undo();
        }
        else {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "No commands to undo" + "\u001B[0m" /* Color.reset */);
        }
    };
    return RemoteControl;
}());
exports.default = RemoteControl;
