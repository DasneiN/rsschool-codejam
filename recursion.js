module.exports = function recursion(tree) {
  let arr = [];

  let fillArr = function(obj, step) {    
    arr[step] = arr[step] ? arr[step].concat([obj['value']]) : [obj['value']];

    if (obj['left']) fillArr(obj['left'], step + 1);
    if (obj['right']) fillArr(obj['right'], step + 1);

    return;
  }

  fillArr(tree, 0);
  
  return arr;
}