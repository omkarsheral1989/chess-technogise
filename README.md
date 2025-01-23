# Setup
* install `yarn`
* install `node` version >=22.6.0
* run `yarn install` from command line

# Run application
* run `yarn dev`


# Run tests
* run `yarn test`
* Tests are inside `__tests__` folder

# Code
* Start at `src/index.ts` file.
* `Board` class represents chess board. 
* It contains instances of `Cell` class which represents a cell on the board.
* `Piece` class represents a chess piece. 
* It contains instance of `IPossibleMovesCalculator` interface which calculates possible moves for the piece.
* `PawnMovesCalculator` class implements `IPossibleMovesCalculator` interface and calculates possible moves for a Pawn.
* `KingMovesCalculator` class implements `IPossibleMovesCalculator` interface and calculates possible moves for a King.
* `QueenMovesCalculator` class implements `IPossibleMovesCalculator` interface and calculates possible moves for a Queen.
* `PieceFactory` class creates instances of `Piece` class based on the piece type.
