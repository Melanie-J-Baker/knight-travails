// Use a graph data structure that is similar (but not identical) to a binary tree - DIRECTED GRAPH!
// A knight can move to any square on 8x8 chess board from any other square on the board, given enough turns. 
// Its basic move is two steps forward and one step to the side. It can face any direction.
// Build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:
// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

// 1. Put together a script that creates a game board and a knight.
const knightMoves = (start, end) => {
    const board = {};
    board[start] = 0;
    const queue = [start];
    while(!(queue[0][0] === end[0] && queue[0][1] === end[1])) {
        const location = queue.shift();
        const moves = checkMoves(getMoves(location));
        moves.forEach(move => {
            // Add next move to end of queue
            queue.push(move);
            // Add new square to board position and add one to move count
            board[move] = board[location] + 1;
        });
    }
    return board[end];
};

const getMoves = (location) => {
    const moves = [];
    moves.push([loc[0] + 1, loc[1] - 2]);
    moves.push([loc[0] + 1, loc[1] + 2]);
    moves.push([loc[0] - 1, loc[1] - 2]);
    moves.push([loc[0] - 1, loc[1] + 2]);
    moves.push([loc[0] + 2, loc[1] - 1]);
    moves.push([loc[0] + 2, loc[1] + 1]);
    moves.push([loc[0] - 2, loc[1] - 1]);
    moves.push([loc[0] - 2, loc[1] + 1]);
    return moves;
}

// 2. Treat all possible moves the knight could make as children in a tree. Do not allow any moves to go off the board.

// 3. Decide which search algorithm (DFS or BFS) is best to use for this case. Hint: one of them could be a potentially infinite series.

// 4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
// > knightMoves([3,3],[4,3])
// => You made it in 3 moves!  Here's your path:
//    [3,3]
//    [4,5]
//    [2,4]
//    [4,3]