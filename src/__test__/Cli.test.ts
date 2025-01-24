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

  describe("readPieceTypeCellNameAndColor()", () => {

    beforeEach(() => {
      prompter.mockReset();
    });


    it.each(["King", " , ", ",A1", "Pawn, A1, ", "", "  ", null])
    ("should throw exception if input is invalid", (inputStr) => {
      prompter.mockReturnValue(inputStr);
      const cli = Cli.getInstance();

      expect(() => cli.readPieceTypeCellNameAndColor()).toThrowError(`Invalid input: ${inputStr}`);
    });


    it("should return piece type, cell name and piece color", () => {
      prompter.mockReturnValue(" KinG ,A1, BLack ");
      const cli = Cli.getInstance();

      const result = cli.readPieceTypeCellNameAndColor();

      expect(result).toEqual({pieceType: "KinG", cellName: "A1", color: "BLack"});
      expect(prompter).toHaveBeenCalledWith("Enter <piece type>, <position>, <color>: ");
    });
  });
});
