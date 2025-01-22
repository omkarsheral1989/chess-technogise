import {PieceFactory} from "../PieceFactory";
import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {PawnMovesCalculator} from "../PawnMovesCalculator";
import {PieceType} from "../PieceType";
import {KingMovesCalculator} from "../KingMovesCalculator";
import {QueenMovesCalculator} from "../QueenMovesCalculator";

describe("PieceFactory class", () => {

  describe("createPiece()", () => {

    it.each([
      {typeString: "Pawn", pieceType: PieceType.Pawn, movesCalculatorClass: PawnMovesCalculator},
      {typeString: "king", pieceType: PieceType.King, movesCalculatorClass: KingMovesCalculator},
      {typeString: "QUeen", pieceType: PieceType.Queen, movesCalculatorClass: QueenMovesCalculator},
    ])(
      "should return the piece of given type",
      ({typeString, pieceType, movesCalculatorClass}) => {
        const board = new Board(new CellNameGenerator());
        const cell = board.getCellByName("A2")!;
        const pieceFactory = new PieceFactory();

        const pawn = pieceFactory.createPiece(typeString, cell, board);

        expect(pawn.getType()).toEqual(pieceType);
        expect(pawn.getCell()).toEqual(cell);
        expect(pawn.getBoard()).toEqual(board);
        expect(pawn.getMovesCalculator() instanceof movesCalculatorClass).toBeTruthy();
      },
    );

    it("should throw error for invalid piece type", () => {
      const board = new Board(new CellNameGenerator());
      const cell = board.getCellByName("A2")!;
      const pieceFactory = new PieceFactory();

      expect(() => pieceFactory.createPiece("wrong", cell, board))
        .toThrowError("Invalid piece type: wrong");
    });
  });
});
