// Converts a 2D array to ',' seperated values string.

const arrayToCSV = (arr, delimiter = ',') => 
                arr.map(v => v.map(x => 
                          (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x))
                          .join(delimiter))
                .join('\n');

Exp.
  arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // "a";"b"\n"c";"d"
