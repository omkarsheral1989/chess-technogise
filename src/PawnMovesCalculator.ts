import {Board} from "./Board";
import {Cell} from "./Cell";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";

export class PawnMovesCalculator implements IPossibleMovesCalculator {

  public getPossibleMoves(currentCell: Cell, board: Board): Cell[] {
    const nextSquare = board.getCellAtCoordinates(
      currentCell.getRow() + 1,
      currentCell.getColumn(),
    );
    return [nextSquare];
  }
}
