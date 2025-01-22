import prompt from "prompt-sync";
import {Cli} from "../Cli";

jest.mock("prompt-sync");

describe("CLI class", () => {

  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe("readPieceTypeAndCellName()", () => {

    beforeEach(() => {
      jest.resetAllMocks();
    });

    it.each(["King", " , ", ",A1"])
    ("should throw exception if input is invalid", (inputStr) => {
      (prompt as jest.Mock).mockReturnValueOnce(() => inputStr);
      const cli = Cli.getInstance();

      expect(() => cli.readPieceTypeAndCellName()).toThrowError("Invalid input");
    });

  });
});
