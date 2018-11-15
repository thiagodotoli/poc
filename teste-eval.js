let a = 0;
let i = 0;

console.time('eval')

for (i; i < 1000; i++) {
  eval('a++')
}

console.timeEnd('eval')

let b = 0;
let vm = require('vm');
i = 0;

console.time('vm')

for (i; i < 1000; i++) {
  vm.runInNewContext('b++', {b})
}

console.timeEnd('vm')