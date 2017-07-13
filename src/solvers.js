/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
//we want to use recursion - 


window.findNRooksSolution = function(n) {
  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };
  var solution = makeEmptyMatrix(n);
  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var factorial = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  var solutionCount = factorial(n); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var completed = Math.pow(2, n) - 1;
  
  var findNextRow = function(col, ld, rd) {
    if (col === completed) {
      solutionCount++;
    }

    var validSpaces = ~(col|ld|rd) & completed;
    while (validSpaces) {
      var candidate = validSpaces & -validSpaces;
      validSpaces -= candidate;
      var newCol = candidate | col;
      var newld = (candidate | ld) >> 1;
      var newrd = (candidate | rd) << 1;
      findNextRow(newCol, newld, newrd);
    } 
    //1000 | 0000. 1000 >> 0100
  };
  findNextRow(0,0,0);
                                                                                                                                                                                                                                                                                   
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
