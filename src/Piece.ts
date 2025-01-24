import {Board} from "./Board";
import {Cell} from "./Cell";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";
import {PieceType} from "./PieceType";
import {Color} from "./Color";

export class Piece {
  private _type: PieceType;
  private _cell: Cell;
  private _board: Board;
  private _possibleMovesCalculator: IPossibleMovesCalculator;
  private _color: Color;

  public constructor(type: PieceType, cell: Cell, board: Board, possibleMovesCalculator: IPossibleMovesCalculator, color: Color) {
    this._type = type;
    this._cell = cell;
    this._board = board;
    this._possibleMovesCalculator = possibleMovesCalculator;
    this._color = color;
  }

  public getPossibleMoves(): Cell[] {
    return this._possibleMovesCalculator.getPossibleMoves(this._cell, this._board);
  }

  public getType(): PieceType {
    return this._type;
  }

  public getColor(): Color {
    return this._color;
  }

  public getCell(): Cell {
    return this._cell;
  }

  public getBoard(): Board {
    return this._board;
  }

  public getMovesCalculator(): IPossibleMovesCalculator {
    return this._possibleMovesCalculator;
  }
}
