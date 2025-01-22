export class Cell {
  private readonly _row: number;
  private readonly _column: number;
  private readonly _name: string;

  public constructor(row: number, column: number, name: string) {
    this._row = row;
    this._column = column;
    this._name = name;
  }

  public getRow() {
    return this._row;
  }

  public getColumn() {
    return this._column;
  }

  public getName() {
    return this._name;
  }
}
