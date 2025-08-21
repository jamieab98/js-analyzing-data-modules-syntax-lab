function combineUsers(...args) {
  args = [];
  console.log(typeof args);
  return args;
}

combineUsers()


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};