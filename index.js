function combineUsers(...args) {
  console.log(args);
  let combineObject = {users: []};
  let a = 0;
  
  while (a < args.length) {
    let tempUser = args[a];
    combineObject.users = [...combineObject.users, ...tempUser];
    console.log(combineObject.users);
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

combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"])

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};