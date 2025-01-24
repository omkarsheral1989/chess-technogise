import prompt from "prompt-sync";

export class Cli {
  private static _instance: Cli;

  public static getInstance() {
    if (!this._instance) {
      this._instance = new Cli();
    }
    return this._instance;
  }

  private _prompter: prompt.Prompt;

  private constructor() {
    this._prompter = prompt();
  }

  public readPieceTypeCellNameAndColor() {
    const inputString = this._prompter("Enter <piece type>, <position>, <color>: ");
    const strings = inputString?.split(",");

    if (strings?.length !== 3 || strings.some(val => val.trim().length === 0)) {
      throw new Error("Invalid input: " + inputString);
    }

    return {pieceType: strings[0].trim(), cellName: strings[1].trim(), color: strings[2].trim()};
  }
}
