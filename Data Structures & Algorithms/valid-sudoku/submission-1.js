class Solution {
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let seen = new Set();
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") continue;
                if (seen.has(board[i][j])) return false;
                seen.add(board[i][j]);
            }
        }

        for (let j = 0; j < board[0].length; j++) {
            let seen = new Set();
            for (let i = 0; i < board.length; i++) {
                if (board[i][j] === ".") continue;
                if (seen.has(board[i][j])) return false;
                seen.add(board[i][j]);
            }
        }

        // Box check
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let seen = new Set();
                for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
                    for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
                        if (board[i][j] === ".") continue;
                        if (seen.has(board[i][j])) return false;
                        seen.add(board[i][j]);
                    }
                }
            }
        }

        return true;
    }
}