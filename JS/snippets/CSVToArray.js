// Converts a comma-seperated values string to a 2D array.

// Using slice() and indexOf('\n') to remove the first row if omitFirstRow is true. 
// Using split('\n') to create a string for each row, then split(delimiter) to separate the values in each row.
// Omit the second arg, delimiter, to use a default delimiter of ','.
// Omit the third arg, omitFirstRow, to include the first row of the CSV string.

const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
    
// Exp.
  CSVToArray('a,b\nc,d');
  // [['a','b'],['c','d']];

// 🧙‍♂️👍