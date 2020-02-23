// Encode a set of form elements as an Object.

// Use the FormData constructor to convert the HTML form to FormData, Array.from() to convert to an array. Collect the object from the array, using reduce().

const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
  
// Exp.
formToObject(document.querySelector('#form'));
// { email: 'test@email.com', name: 'Test Name' }
