function make(...args) {

  let arr = Array.from(args);
  let fn = function (a,b) {
    return a + b;
  };
  
  let innerFunc = function(...args) {

    if (args.length == 1 && (typeof args[0] == 'function') ) {
      fn = args[0];
    } else {
      arr = arr.concat(Array.from(args));
    }

    return innerFunc;
  }

  innerFunc.valueOf = function () {
    return arr.reduce( fn );
  }

  return innerFunc;
  
}