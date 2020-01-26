// Delays the execution of an asynchronous function.

// Delay executing part of an async function, by putting it to sleep, returning a Promise.

const sleep = ms => new Promise(resolve => 
                              setTimeout(resolve, ms));
