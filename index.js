function combineUsers(args) {
  let combineObject = {users: []};
  let a = 0;
  while (a < args.length) {
    console.log(a);
    a++;
  }
  console.log('apple');
  return args;
}
let input = [1, 2, 3];

combineUsers(input)


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};