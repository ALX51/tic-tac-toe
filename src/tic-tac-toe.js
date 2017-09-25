class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.marks = [[null, null, null], [null, null, null], [null, null, null]];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( (this.marks[rowIndex][columnIndex] == null) && (this.winner == null)) {
            this.marks[rowIndex][columnIndex] = this.playerSymbol;
            if (this.playerSymbol == 'x') {
                this.playerSymbol = 'o';
            } else {
                this.playerSymbol = 'x';
            }
        }
         if ((this.marks[0][0] == this.marks[0][1]) && (this.marks[0][0] == this.marks[0][2]) && (this.marks[0][0] != null)) {
              this.winner = this.marks[0][0];           
              return;
        }
         if ((this.marks[1][0] == this.marks[1][1]) && (this.marks[1][0] == this.marks[1][2]) && (this.marks[1][0] != null)) {
              this.winner = this.marks[1][0];            
              return;
        }
         if ((this.marks[2][0] == this.marks[2][1]) && (this.marks[2][0] == this.marks[2][2]) && (this.marks[2][0] != null)) {
              this.winner = this.marks[2][0];             
              return;
        }
        if ((this.marks[0][0] == this.marks[1][0]) && (this.marks[0][0] == this.marks[2][0]) && (this.marks[0][0] != null)) {
              this.winner = this.marks[0][0];
              return;
        }
         if ((this.marks[0][1] == this.marks[1][1]) && (this.marks[0][1] == this.marks[2][1]) && (this.marks[0][1] != null)) {
              this.winner = this.marks[0][1];             
              return;
        }
         if ((this.marks[0][2] == this.marks[1][2]) && (this.marks[0][2] == this.marks[2][2]) && (this.marks[0][2] != null)) {
              this.winner = this.marks[0][2];             
              return;
        }
        
         if ((this.marks[0][0] == this.marks[1][1]) && (this.marks[0][0] == this.marks[2][2]) && (this.marks[0][0] != null)) {
              this.winner = this.marks[0][0];
              return;
        }
         if ((this.marks[0][2] == this.marks[1][1]) && (this.marks[0][2] == this.marks[2][0]) && (this.marks[0][2] != null)) {
              this.winner = this.marks[0][2];
              return;
        }
    }

    isFinished() {
        if ( this.winner == null ) {
          for (var i = 0; i < this.marks.length; i++) {
            for (var j = 0; j < this.marks[i].length; j++) {
              if (this.marks[i][j] == null) {
                return false;
              }
            }
          }
      }
      return true;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (var i = 0; i < this.marks.length; i++) {
            for (var j = 0; j < this.marks[i].length; j++) {
              if (this.marks[i][j] == null) {
                return false;
              }
            }
        }
        return true;
    }

    isDraw() {
        if ( this.winner == null) {
            for (var i = 0; i < this.marks.length; i++) {
                for (var j = 0; j < this.marks[i].length; j++) {
                      if (this.marks[i][j] == null) {
                        return false;
                      }
                }
            }
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.marks[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
