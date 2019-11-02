// Converts an asynchronous function to return a promise.

const promisify = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
  
Exp.

  const delay = promisify((d, cb) => setTimeout(cb, d));
  delay(2000).then(() => console.log('need err!'));
