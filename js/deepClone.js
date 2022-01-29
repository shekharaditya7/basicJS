const user = {
  address: {
    name: {
      fname: "Aditya",
      lname: "Shekhar",
    },
    place: "Bihar",
  },
  x: 1,
  y: 2,
  phone: {
    code: 91,
    number: 7979972041,
  },
};

function deepClone(obj) {
  const currObj = Array.isArray(obj) ? [] : {};
  if (typeof obj !== "object") throw new Error("Expected an Object");
  for (key in obj) {
    if (obj[key] instanceof Object) currObj[key] = deepClone(obj[key]);
    else currObj[key] = obj[key];
  }
  return currObj;
}

export default deepClone;
