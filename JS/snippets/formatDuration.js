Returns the human readable format of the given number of milliseconds.

Dividing ms with the appropriate values to obtain the appropriate values for day, hour, minute, second and millisecond.
Using entries() with filter() to keep only non-zero values. 
Using map() to create the string for each value, pluralizing appropriately.
Using String.prototype.join(', ') to combine the values into a string.

const formatDuration = ms => {
  if (ms < 0) {
    ms = -ms;
  }
  
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  
  return Object.entries(time)
      .filter(val => val[1] !== 0)
      .map(([key, val]) => `${val} ${key} ${val !== 1 ? 's' : ''}`)
      .join(', ');
};

  // Exp.
  
  formatDuration(1001);
  // '1 second, 1 millisecond'
