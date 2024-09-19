import Colors from '../../../../ConsoleColors';
import FileSystem from './FileSystem';

class File implements FileSystem {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    ls(): void {
        console.log(`${Colors.fgBrightMagenta}` + this.name + `${Colors.reset}`); 
    }
}

export default File;