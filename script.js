let txt = prompt('Enter a text with (a) included in it but before it no word should have any a in it: Challenge')
let wCount = txt.split(' ').length
let replace = txt.replace('a','many')
let included = txt.includes('a')
alert(`Word count: ${wCount}`)
alert(`Replaced txt: ${replace}`)
alert(`included: ${included}`)