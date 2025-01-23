import prompt from "prompt-sync";
import {Cli} from "../Cli";

jest.mock("prompt-sync");

describe("CLI class", () => {

  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  const prompter = jest.fn();
  (prompt as jest.Mock).mockReturnValue(prompter);

  describe("readPieceTypeAndCellName()", () => {

    beforeEach(() => {
      prompter.mockReset();
    });


    it.each(["King", " , ", ",A1", "Pawn, A1, King", "", "  ", null])
    ("should throw exception if input is invalid", (inputStr) => {
      prompter.mockReturnValue(inputStr);
      const cli = Cli.getInstance();

      expect(() => cli.readPieceTypeAndCellName()).toThrowError("Invalid input");
    });


    it("should return piece type and cell name", () => {
      prompter.mockReturnValue(" KinG ,A1 ");
      const cli = Cli.getInstance();

      const result = cli.readPieceTypeAndCellName();

      expect(result).toEqual({pieceType: "KinG", cellName: "A1"});
      expect(prompter).toHaveBeenCalledWith("Enter <piece type>, <position>: ");
    });
  });
});
