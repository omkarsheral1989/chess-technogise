import {Board} from "./Board";
import {CellNameGenerator} from "./CellNameGenerator";
import {PieceFactory} from "./PieceFactory";
import {Cli} from "./Cli";

export class Application {
  public static main() {
    try {
      const {board, pieceFactory, cli} = this.instantiateClasses();

      const piece = this.createPiece(cli, board, pieceFactory);

      const possibleMoves = piece.getPossibleMoves();

      console.log(
        "Possible moves: " +
        possibleMoves.map(cell => cell.getName()).join(", "),
      );
    } catch (e) {
      console.log((e as Error).message);
    }
  }

  private static instantiateClasses() {
    const board = new Board(new CellNameGenerator());
    const pieceFactory = new PieceFactory();
    const cli = Cli.getInstance();
    return {board, pieceFactory, cli};
  }

  private static createPiece(cli: Cli, board: Board, pieceFactory: PieceFactory) {
    const {pieceType, cellName} = cli.readPieceTypeAndCellName();
    const cell = board.getCellByName(cellName);
    return pieceFactory.createPiece(pieceType, cell, board);
  }
}
