// Checks if the provided string is a valid JSON.

// Using JSON.parse() and a try/catch block to check if it's string.

const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

// Exp.
    isValidJSON('{"name":"Adam","age":20}');
    // true
    
    isValidJSON('{"name":"Adam",age:"20"}');
    // false
