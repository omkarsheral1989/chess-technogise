import {Board} from "../Board";
import {CellNameGenerator} from "../CellNameGenerator";
import {QueenMovesCalculator} from "../QueenMovesCalculator";

describe("QueenMovesCalculator class", () => {

  describe("getPossibleMoves()", () => {

    it.each([
      {
        cellName: "E4",
        expectedMoves: ["B1", "E1", "H1", "C2", "E2", "G2", "D3", "E3", "F3", "A4", "B4", "C4", "D4", "F4", "G4", "H4", "D5", "E5", "F5", "C6", "E6", "G6", "B7", "E7", "H7", "A8", "E8"],
      },
      {
        cellName: "A8",
        expectedMoves: ["A1", "H1", "A2", "G2", "A3", "F3", "A4", "E4", "A5", "D5", "A6", "C6", "A7", "B7", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
      },
    ])(
      "should return possible moves for given position",
      ({cellName, expectedMoves}) => {
        const board = new Board(new CellNameGenerator());
        const queenMovesCalculator = new QueenMovesCalculator();
        const cell = board.getCellByName(cellName)!;

        const possibleMoves = queenMovesCalculator.getPossibleMoves(cell, board);

        expect(possibleMoves.map(cell => cell.getName())).toEqual(expectedMoves);
      },
    );
  });
});
