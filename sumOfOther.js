function sumOfOther(arr) {
  let summ = arr.reduce( (ac,v) => ac + v );

  return arr.map( v => summ - v );
}
