require('datejs');
function combineUsers(...args) {
  let combineObject = {users: []};
  let a = 0;
  
  while (a < args.length) {
    let tempUser = args[a];
    combineObject.users = [...combineObject.users, ...tempUser];
    a++
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  const merge_date = `${month}/${day}/${year}`;

  combineObject.merge_date = merge_date;
  return combineObject;
}

combineUsers()

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};