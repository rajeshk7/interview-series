import ILetter from "./ILetter";
import Character from "./Character";
import Color from '../../ConsoleColors'

/**
 * The static keyword in TypeScript (and JavaScript) is used to define a static method or property of a class. 
 * Static methods and properties are associated with the class itself, rather than instances of the class. 
 * This means you can call a static method or access a static property without creating an instance of the class.
 */

class ILetterFactory {
    private static letterStore = new Map<string, ILetter>();

    static createLetter(character: string): ILetter {
        if(this.letterStore.has(character)) {
            console.log(Color.fgBrightGreen + `Character ${character} already exists in the store.` + Color.reset);
            return this.letterStore.get(character)!;
        }
        console.log(Color.fgBrightRed + `Creating character ${character}` + Color.reset);
        const letter = new Character(character, 12, "Arial");
        this.letterStore.set(character, letter);
        return letter;
    }
}

export default ILetterFactory;