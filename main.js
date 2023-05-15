// Use a graph data structure that is similar (but not identical) to a binary tree - DIRECTED GRAPH!
// A knight can move to any square on 8x8 chess board from any other square on the board, given enough turns. 
// Its basic move is two steps forward and one step to the side. It can face any direction.
// Build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.
// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:
// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

//1. Put together a script that creates a game board and a knight. 
//Breadth-first search is best for finding shortest path
function Node(position, path) {
    if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
        return null;
    }
    return { position, path };
}

function knightMoves([x, y], [a, b]) {
    let queue = [Node([x, y], [[x, y]])];
    let location = queue.shift();
    while (location.position[0] !== a || location.position[1] !== b) {
        let moves = getMoves(location);
        moves.forEach((move) => {
            let node = Node(move, location.path.concat([move]));
            if (node) {
                queue.push(node);
            }
        });
        location = queue.shift();
    }
    console.log(`=> You made it in ${location.path.length - 1} moves! Here's your path:`);
    location.path.forEach((position) => {
        console.log(position);
    });
}

// 2. Treat all possible moves the knight could make as children in a tree. Do not allow any moves to go off the board.
const getMoves = (location) => {
    const moves = [];
    moves.push([location.position[0] + 1, location.position[1] - 2]);
    moves.push([location.position[0] + 1, location.position[1] + 2]);
    moves.push([location.position[0] - 1, location.position[1] - 2]);
    moves.push([location.position[0] - 1, location.position[1] + 2]);
    moves.push([location.position[0] + 2, location.position[1] - 1]);
    moves.push([location.position[0] + 2, location.position[1] + 1]);
    moves.push([location.position[0] - 2, location.position[1] - 1]);
    moves.push([location.position[0] - 2, location.position[1] + 1]);
    return moves;
}

knightMoves([0,0], [1,2]);
knightMoves([3,3], [4,3]);

// 4. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
// > knightMoves([3,3],[4,3])
// => You made it in 3 moves!  Here's your path:
//    [3,3]
//    [4,5]
//    [2,4]
//    [4,3]