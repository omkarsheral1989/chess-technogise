export class CellNameGenerator {
  private readonly _files = ["A", "B", "C", "D", "E", "F", "G", "H"] as const;

  public getCellNameFromCoordinates(row: number, column: number): string {
    const rank = row + 1;
    const file = this._files[column];
    return `${file}${rank}`;
  }
}
