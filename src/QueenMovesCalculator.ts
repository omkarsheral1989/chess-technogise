import {Board} from "./Board";
import {Cell} from "./Cell";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";
import {range} from "./utils/range";

export class QueenMovesCalculator implements IPossibleMovesCalculator {

  public getPossibleMoves(currentCell: Cell, board: Board): Cell[] {
    return range(0, Board.MAX_ROWS - 1)
      .flatMap(row =>
        range(0, Board.MAX_COLUMNS - 1)
          .filter(column => (
            this.isHorizontalMove(currentCell, row, column) ||
            this.isVerticalMove(currentCell, row, column) ||
            this.isDiagonalMove(currentCell, row, column)
          ))
          .map(
            column => board.getCellAtCoordinates(row, column)!,
          ),
      );
  }

  private isHorizontalMove(currentCell: Cell, row: number, column: number) {
    return currentCell.getRow() === row && currentCell.getColumn() !== column;
  }

  private isVerticalMove(currentCell: Cell, row: number, column: number) {
    return currentCell.getColumn() === column && currentCell.getRow() !== row;
  }

  private isDiagonalMove(currentCell: Cell, row: number, column: number) {
    return Math.abs(currentCell.getRow() - row) === Math.abs(currentCell.getColumn() - column)
      && currentCell.getRow() !== row
      && currentCell.getColumn() !== column;
  }
}
