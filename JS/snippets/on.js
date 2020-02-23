// Adds an event listener to an element with the ability to use event delegation.

// Basically we are using EventTarget.addEventListener() to add an event listener to an element and checking conditions.

const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};

// Exp.
  const fn = () => console.log('!');
  on(document.body, 'click', fn);
