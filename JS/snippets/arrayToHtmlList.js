// Converts the given array elements into <li> tags and appends them to the list of the given id.

// Using map(), document.querySelector(), and an anonymous inner closure to create a list of html tags.

const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join('')))
  )();

// 🧙‍♂️👍