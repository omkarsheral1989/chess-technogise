import {PieceType} from "./PieceType";
import {PawnMovesCalculator} from "./PawnMovesCalculator";
import {QueenMovesCalculator} from "./QueenMovesCalculator";
import {KingMovesCalculator} from "./KingMovesCalculator";
import {IPossibleMovesCalculator} from "./IPossibleMovesCalculator";
import {Piece} from "./Piece";
import {Board} from "./Board";
import {Cell} from "./Cell";

export class PieceFactory {
  protected _possibleMovesCalculatorMap: Record<PieceType, {
    type: PieceType,
    possibleMovesCalculatorClass: typeof IPossibleMovesCalculator
  }> = {
    [PieceType.Pawn]: {type: PieceType.Pawn, possibleMovesCalculatorClass: PawnMovesCalculator},
    [PieceType.King]: {type: PieceType.King, possibleMovesCalculatorClass: KingMovesCalculator},
    [PieceType.Queen]: {type: PieceType.Queen, possibleMovesCalculatorClass: QueenMovesCalculator},
  };

  public createPiece(type: string, cell: Cell, board: Board, color: string): Piece {
    const mapValue = this._possibleMovesCalculatorMap[type.toUpperCase() as PieceType];
    if (!mapValue) {
      throw new Error(`Invalid piece type: ${type}`);
    }

    if (!(color.toUpperCase() in Color)) {
      throw new Error(`Invalid color: ${color}}`);
    }

    // @ts-ignore
    return new Piece(mapValue.type, cell, board, new mapValue.possibleMovesCalculatorClass());
  }
}
