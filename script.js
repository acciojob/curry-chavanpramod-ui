function curry(callback) {
  return function curried(...args) {
    if (args.length === 0) {
      return callback();
    }
    return function(...nextArgs) {
      if (nextArgs.length === 0) {
        return callback(...args);
      }
      return curried(...args.concat(nextArgs));
    };
  };
}