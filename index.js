function combineUsers(args) {
  let combineObject = {users: []};
  let a = 0;
  while (a < args.length) {
    let tempUser = args[a];
    combineObject.users.push(tempUser);
    a++
  }
  console.log(combineObject);
  return combineObject;
}
let input = ['Jamie', 'Bobby', 'Michael'];

combineUsers(input)

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};