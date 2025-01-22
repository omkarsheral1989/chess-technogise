import {Board} from "./Board";
import {Cell} from "./Cell";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";
import {range} from "./utils/range";

export class KingMovesCalculator implements IPossibleMovesCalculator {

  public getPossibleMoves(currentCell: Cell, board: Board): Cell[] {
    return range(
      currentCell.getRow() - 1,
      currentCell.getRow() + 1,
    ).flatMap(row => range(
        currentCell.getColumn() - 1,
        currentCell.getColumn() + 1,
      ).map(
        column => board.getCellAtCoordinates(row, column),
      ),
    ).filter(
      cell => (!!cell && cell !== currentCell),
    ) as Cell[];
  }
}
