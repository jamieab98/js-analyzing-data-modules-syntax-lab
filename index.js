function combineUsers(args) {
  let combineObject = {users: []};
  let a = 0;
  for (let arg of args) {
    console.log(arg);
  }
  return args;
}
let input = ['Jamie', 'Bobby'];

combineUsers(input)


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};