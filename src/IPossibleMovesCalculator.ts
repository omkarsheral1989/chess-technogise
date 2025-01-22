import {Cell} from "./Cell";
import {Board} from "./Board";

export interface IPossibleMovesCalculator {
  getPossibleMoves(currentCell: Cell, board: Board): Cell[];
}
