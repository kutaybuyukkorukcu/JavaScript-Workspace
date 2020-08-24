// Clones a regular expression.

// Using new RegExp() and previous reg's values to clone.

const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);

// Exp.
    const regExp = /lorem ipsum/gi;
    const regExp2 = cloneRegExp(regExp);
    // -> /lorem ipsum/gi

// 🧙‍♂️👍