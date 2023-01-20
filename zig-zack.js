const input = [1, 5, 3, 4, 6, 2, 7];
input.sort((a, b) => a - b)

let output = [];

const len = input.length;
const min = Math.min(...input)
const max = Math.max(...input)

const mid = Math.round(max / 2)

let first = []
let last = []

output[mid] = max;


console.log(output);
checker(input)


function checker(arr) {
    const len = arr.length;
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    const midPoint = Math.round(len / 2)

    arr.forEach((single, i) => {
        if (i) {
            // increasing
            if (i < midPoint) {
                if (single > arr[i - 1]) {
                    console.log('ok increasing')
                }
                else {
                    return false;
                }
            }
            // decreasing
            else {
                if (single < arr[i - 1]) {
                    console.log('ok decreasing')
                }
                else {
                    return false;
                }
            }

        }

    });

}
