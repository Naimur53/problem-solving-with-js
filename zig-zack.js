const input = [1, 2, 3, 4, 5, 6, 7];
// input.sort((a, b) => a - b)

// let output = [];

// const len = input.length;
// const min = Math.min(...input)
// const max = Math.max(...input)

// const mid = Math.round(max / 2)

// let first = []
// let last = []

// output[mid] = max;


// console.log(output);
// checker(input)
// input.splice(5, 5)
console.log(convertToZigZack(input))




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
                    console.log('wrong increasing')

                    return false;
                }
            }
            // decreasing
            else {
                if (single < arr[i - 1]) {
                    console.log('ok decreasing')
                }
                else {
                    console.log('wrong decreasing')

                    return false;
                }
            }

        }

    });

}


function convertToZigZack(arr) {

    short(arr)

    const len = arr.length;
    const mid = Math.round(len / 2)

    console.log(mid)
    const first = arr.slice(0, mid);
    const firstLastNum = first[first.length - 1]

    const firstEle = first.slice(0, first.length - 1)
    console.log(firstEle)

    const last = arr.slice(mid)

    let lastRev = [];
    const lastEle = [firstLastNum, ...last]

    lastEle.forEach(ele => {
        lastRev = [ele, ...lastRev]
    })

    const result = firstEle.concat(lastRev)
    console.log(...result)

}



function short(arr) {
    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1]) {
            if (arr[i] > arr[i + 1]) {

                const tem = arr[i]
                arr[i] = arr[i + 1];
                arr[i + 1] = tem;
                return short(arr);
            }
        }
    }
}