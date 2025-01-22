import {Piece} from "../Piece";
import {PieceType} from "../PieceType";
import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {PawnMovesCalculator} from "../PawnMovesCalculator";

jest.mock("../PawnMovesCalculator");

describe("Piece class", () => {

  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  describe("getPossibleMoves()", () => {

    it("should return possible moves", () => {
      const board = new Board(new CellNameGenerator());
      const cell = board.getCellByName("A2")!;
      const pawnMovesCalculator = new PawnMovesCalculator();
      const possibleMoves = [board.getCellByName("A3")!];
      const pawn = new Piece(PieceType.Pawn, cell, board, pawnMovesCalculator);
      (pawnMovesCalculator.getPossibleMoves as jest.Mock).mockReturnValue(possibleMoves);

      expect(pawn.getPossibleMoves()).toEqual(possibleMoves);

      expect(pawnMovesCalculator.getPossibleMoves).toHaveBeenCalledWith(cell, board);
    });
  });
});
