"use strict";
{
  function InBLock() {
    console.log("Try to invoke me outside this block");
  }
}
InBLock();

const t = 200000;
for (let i = 0; i < t; i++) {
  // uncomment to see how 'console logs' slow down things
  //   console.log("Hello");
}
