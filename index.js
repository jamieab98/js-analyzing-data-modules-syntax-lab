require('datejs')
function combineUsers(...args) {
  let combineObject = {users: []};
  let a = 0;
  
  while (a < args.length) {
    let tempUser = args[a];
    combineObject.users = [...combineObject.users, ...tempUser];
    a++
  }

  const currentDate = Date.today().toString('M/d/yyyy');
  const merge_date = currentDate;

  combineObject.merge_date = merge_date;
  return combineObject;
}

combineUsers()

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};