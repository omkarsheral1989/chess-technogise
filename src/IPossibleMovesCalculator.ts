import {Cell} from "./Cell";
import {Board} from "./Board";

export abstract class IPossibleMovesCalculator {
  abstract getPossibleMoves(currentCell: Cell, board: Board): Cell[];
}
