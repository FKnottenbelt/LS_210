function copyProperties(obj1, obj2) {
  Object.assign(obj2, obj1);
  return Object.keys(obj1).length;
}

const hal = {
  model: 9000,
  enabled: true,
};

const sal = {};
console.log(copyProperties(hal, sal)); // 2
console.log(sal); // { model: 9000, enabled: true }
