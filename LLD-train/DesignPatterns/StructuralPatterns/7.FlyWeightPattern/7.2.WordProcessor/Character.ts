class Character {
    Character: string;
    FontSize: number;
    FontName: string;

    constructor(character: string, fontSize: number, fontName: string) {
        this.Character = character;
        this.FontSize = fontSize;
        this.FontName = fontName;
    }

    display(row: number, col: number): void {
        console.log(`Character: ${this.Character}, FontSize: ${this.FontSize}, FontName: ${this.FontName}, Row: ${row}, Col: ${col}` + '\n');
    }
}

export default Character;