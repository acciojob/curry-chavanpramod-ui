function curry(callback) {
  return function curried(...args) {
    return function(...nextArgs) {
      if (nextArgs.length === 0) {
        return callback(...args);
      }
      return curried(...args.concat(nextArgs));
    };
  };
}