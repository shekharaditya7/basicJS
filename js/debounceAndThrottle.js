// debouncing
function debouncedFunction(fn, delay) {
  let timer = null;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

//throttling
function throttledFunction(fn, interval) {
  let timer;
  return function () {
    if (timer) return;
    let context = this,
      args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, interval);
  };
}

let inputEleD = document.getElementById("myInputDebounce");
let inputEleT = document.getElementById("myInputThrottle");

inputEleD.addEventListener("input", (event) => {
  debouncedGetData(event.target.value);
});

inputEleT.addEventListener("input", (event) => {
  throttledGetData(event.target.value);
});

function getData(val) {
  console.log(val);
}
const debouncedGetData = debouncedFunction(getData, 1000);
const throttledGetData = throttledFunction(getData, 1000);
