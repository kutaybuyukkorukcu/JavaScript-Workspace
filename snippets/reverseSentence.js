function reverse(string) {

  return string.trim()
               .split('')
               .reverse()
               .join('');
}

function reverseSentence(string) {

  const reversed = reverse(string);
  
  return reversed[0].toUpperCase()
                    + reversed.substring(1)
                    + (reversed[reversed.length - 1] === "." ? "" : ".");
}

------------------------------------------------------------------------------------

const reverse = string => string.trim()
                                .split('')
                                .reverse()
                                .join('');
                                
const upperFirst = string => string[0].toUpperCase()
                                      + string.substring(1);
                                      
const addPeriod = string => string
                          + (string[string.length - 1] === "." ? "" : ".");
                          
const reverseSentence = (string) => upperFirst(addPeriod(reverse(string)));
