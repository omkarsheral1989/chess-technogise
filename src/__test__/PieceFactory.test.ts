import {PieceFactory} from "../PieceFactory";
import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {PawnMovesCalculator} from "../PawnMovesCalculator";
import {PieceType} from "../PieceType";
import {KingMovesCalculator} from "../KingMovesCalculator";
import {QueenMovesCalculator} from "../QueenMovesCalculator";
import {Color} from "../Color";
import {colorDirectionMap, ForwardDirection} from "../ForwardDirection";

describe("PieceFactory class", () => {

  describe("createPiece()", () => {

    it.each([
      {typeString: "Pawn", color: Color.BLACK, pieceType: PieceType.Pawn, movesCalculatorClass: PawnMovesCalculator},
      {typeString: "king", color: Color.WHITE, pieceType: PieceType.King, movesCalculatorClass: KingMovesCalculator},
      {typeString: "QUeen", color: Color.WHITE, pieceType: PieceType.Queen, movesCalculatorClass: QueenMovesCalculator},
    ])(
      "should return the piece of given type",
      ({typeString, pieceType, movesCalculatorClass, color}) => {
        const board = new Board(new CellNameGenerator());
        const cell = board.getCellByName("A2")!;
        const pieceFactory = new PieceFactory();
        const forwardDirection = colorDirectionMap[color];

        const piece = pieceFactory.createPiece(typeString, cell, board, color);

        expect(piece.getType()).toEqual(pieceType);
        expect(piece.getColor()).toEqual(color);
        expect(piece.getCell()).toEqual(cell);
        expect(piece.getBoard()).toEqual(board);
        expect(piece.getMovesCalculator() instanceof movesCalculatorClass).toBeTruthy();
        expect(piece.getMovesCalculator().getDirection()).toEqual(forwardDirection);
      },
    );

    it("should throw error for invalid piece type", () => {
      const board = new Board(new CellNameGenerator());
      const cell = board.getCellByName("A2")!;
      const pieceFactory = new PieceFactory();

      expect(() => pieceFactory.createPiece("wrongPieceType", cell, board, Color.WHITE))
        .toThrowError("Invalid piece type: wrongPieceType");
    });

    it("should throw error for invalid color", () => {
      const board = new Board(new CellNameGenerator());
      const cell = board.getCellByName("A2")!;
      const pieceFactory = new PieceFactory();

      expect(() => pieceFactory.createPiece("Pawn", cell, board, "blue"))
        .toThrowError("Invalid color: blue");
    });
  });
});

