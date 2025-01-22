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

  public readPieceTypeAndCellName() {
    const inputString = this._prompter("Enter the piece type and position: ");
    const strings = inputString.split(",");

    if (strings.length !== 2 || strings[0].trim().length === 0 || strings[1].trim().length === 0) {
      throw new Error("Invalid input");
    }

    return {pieceType: strings[0].trim(), cellName: strings[1].trim()};
  }
}
