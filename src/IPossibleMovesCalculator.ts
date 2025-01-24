import {Cell} from "./Cell";
import {Board} from "./Board";
import {ForwardDirection} from "./ForwardDirection";

export abstract class IPossibleMovesCalculator {
  protected _direction: ForwardDirection | undefined;

  public constructor(direction?: ForwardDirection) {
    this._direction = direction;
  }

  abstract getPossibleMoves(currentCell: Cell, board: Board): Cell[];
}
