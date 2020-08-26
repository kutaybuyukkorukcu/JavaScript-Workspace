// Escapes a string for use in HTML.

// Using String.prototype.replace() with  a regexp that matches the characters that need to be escaped, 
// using a callback function to replace each character instance with its associated escaped character using a dictionary.

const escapeHTML = string => 
    string.replace(
      /[&<>'"]/g,
      tag =>
        ({
          '&' : '&amp;',
          '<' : '&lt;',
          '>' : '&gt;',
          "'" : '&#39;',
          '"' : '&quot;'
        }[tag] || tag)
     );
     
// Exp.
  
  escapeHTML('<a href="#"> Me & you </a>');
  // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'

// 🧙‍♂️👍 