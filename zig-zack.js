const input = [2, 3, 5, 1, 4]
let output = [];

const len = input.length;
const min = Math.min(...input)
const max = Math.max(...input)

const mid = Math.round(len / 2)
const midNumber = input[mid];

let first = []
let last = []

output[mid - 1] = max;
input.forEach(ele => {
    if (ele !== max) {

    }
})
console.log(output)

