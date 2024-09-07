import ILetter from "./ILetter";
import ILetterFactory from "./ILetterFactory";

const charOne: ILetter = ILetterFactory.createLetter("a");
charOne.display(1, 1);

const charTwo: ILetter = ILetterFactory.createLetter("a");
charTwo.display(1, 2);

const charThree: ILetter = ILetterFactory.createLetter("b");
charThree.display(1, 3);

const charFour: ILetter = ILetterFactory.createLetter("b");
charFour.display(1, 4);

