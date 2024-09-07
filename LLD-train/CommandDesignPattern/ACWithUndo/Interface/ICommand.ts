interface ICommand {
    execute(): void;
    undo(): void;
}

export default ICommand;