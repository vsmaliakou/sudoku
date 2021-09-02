module.exports = function solveSudoku(matrix) {
  // your solution
  let indices = searchIndices(matrix);
  let row = indices[0];
  let column = indices[1];  
  if(row === -1) return matrix;
  for(let i = 1; i <= 9; i++){
      if(generalSearch(matrix, row, column, i)){
          matrix[row][column] = i;
          solveSudoku(matrix)            
      }
  }
  if (searchIndices(matrix)[0] !== -1) matrix[row][column] = 0;

  return matrix
}

function searchIndices(matrix){
  for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
          if(matrix[i][j] === 0) return [i, j];
      }
  }
  return [-1, -1]
}

function checkRow(matrix, row, value) {
  return matrix[row].includes(value) ? false : true;
}

function checkColumn(matrix, column, value) {
  let col = []
  for(let i = 0; i < matrix.length; i++){
      col.push(matrix[i][column])
  }
  return col.includes(value) ? false : true;
}

function checkBox(matrix, row, column, value) {
  row = Math.floor(row / 3) * 3;
  column = Math.floor(column / 3) * 3;
  for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
          if (matrix[row + i][column + j] == value) return false;
      }
  }
  return true;
}

function generalSearch(matrix, row, column, value) {
  return (checkRow(matrix, row, value) && checkColumn(matrix, column, value) && checkBox(matrix, row, column, value))
}

