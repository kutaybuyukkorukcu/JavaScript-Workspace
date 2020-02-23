// Encode a set of form elements as a query string.

// Use FormData constructor to convert the HTML form to FormData, Array.from() to convert to an array, passing a map function as the second arg.
// map() and window.encodeURIComponent() to encode each field's value. join() with appropriate arguments to produce an appropriate query string.

const serializeForm = form =>
  Array.from(new FormData(form), field => 
    field.map(encodeURIComponent).join('=')).join('&');
  
// Exp.
  serializeForm(document.querySelector('#form'));
  // email=test%40email.com&name=Test%20Name
