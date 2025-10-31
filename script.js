let txt = 'Everything happens for a reason';
let wCount = txt.split(' ').length;
let replace = txt.replace('for', 'a');
let included = txt.includes('');
console.log(`Word count: ${wCount}`);
console.log(`Replaced sentence: ${replace}`);
console.log(`Contains 'fox': ${included}`);