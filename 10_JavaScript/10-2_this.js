console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();

console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller();

// function is always registered to global(window)
// const and let are not registered to global(window)
// but, var is registered to global(window)

class David { }
const david = new David();
david.run = counter.increase;
david.run();
