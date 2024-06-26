# knight-travails

Created as part of the Odin Project: https://www.theodinproject.com/lessons/javascript-knights-travails

Using depth-first and breadth-first search algorithms on a real problem. Use a data structure that’s similar (but not identical) to a binary tree. 

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns .Its basic move is two steps forward and one step to the side. It can face any direction.

Build a function knightMoves that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way. You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

Put together a script that creates a game board and a knight.

Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
  > knightMoves([3,3],[4,3])
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]
