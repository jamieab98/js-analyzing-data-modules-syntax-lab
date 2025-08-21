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
  /*const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();*/
  const merge_date = currentDate;

  console.log(currentDate);

  combineObject.merge_date = merge_date;
  return combineObject;
}
console.log(Date.today().toString('MM/dd/yyyy'));

combineUsers()

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};