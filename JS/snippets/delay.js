// Invokes the provided func after wait ms.

// Using setTimeout() to delay exec of 'fn'. Also using (...) operator to supply the func with an arbitrary number of args.

const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

// Exp.
  delay(
    (text) => {
      console.log(text);
    },
    1000,
    'Delayed text!'
  );

// 🧙‍♂️👍