// Chains asynchronous functions.

// Loop through an array of functions containing async events, calling 'next()' when each async event has completed.

const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};

// Exp.
  chainAsync([
    next => {
      console.log('n0n sec');
      setTimeout(next, 1000);
    },
    next => {
      console.log('a sec');
      setTimeout(next, 1000);
    },
    () => {
      console.log('2 sec');
    }
  ]);
