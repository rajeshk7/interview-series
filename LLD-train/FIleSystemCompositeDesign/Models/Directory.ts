import FileSystem from "./FileSystem";
import Colors from "../../ConsoleColors";

class Directory implements FileSystem {

    name: string;
    children: FileSystem[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    add(file: FileSystem): void {
        this.children.push(file);
    }

    ls(): void {
        console.log(`${Colors.fgBrightRed}` + this.name + `${Colors.reset}\n`);

        for (const child of this.children) {
            child.ls();
        }
    }
}

export default Directory;