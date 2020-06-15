Returns true if the parent element contains the child element, otherwise returns false.

Check that parent is not the same element as child, using parent.contains(child) to check if the parent element contains the child element.

const elementContains = (parent, child) => parent !== child && parent.contains(child);

// Exp.

  elementContains(document.querySelector("head"), document.querySelector("title"));
  // true
