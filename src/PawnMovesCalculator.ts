import {Board} from "./Board";
import {Cell} from "./Cell";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";

export class PawnMovesCalculator extends IPossibleMovesCalculator {

  public getPossibleMoves(currentCell: Cell, board: Board): Cell[] {
    const nextSquare = board.getCellAtCoordinates(
      currentCell.getRow() + this._direction!,
      currentCell.getColumn(),
    );
    if (!nextSquare) {
      return [];
    }
    return [nextSquare];
  }
}
