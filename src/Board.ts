import {Cell} from "./Cell";
import {CellNameGenerator} from "./CellNameGenerator";

export class Board {
  public static readonly MAX_ROWS = 8;
  public static readonly MAX_COLUMNS = 8;

  private readonly _cells: Cell[][];

  public constructor(cellNameGenerator: CellNameGenerator) {
    this._cells = Array(Board.MAX_ROWS);
    for (let row = 0; row < Board.MAX_ROWS; row++) {
      this._cells[row] = Array(Board.MAX_COLUMNS);
      for (let column = 0; column < Board.MAX_COLUMNS; column++) {
        this._cells[row][column] =
          new Cell(row, column, cellNameGenerator.getCellNameFromCoordinates(row, column));
      }
    }
  }

  public getCellAtCoordinates(row: number, column: number): Cell {
    return this._cells[row][column];
  }
}
