const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num); // adding new element to the end of array
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num); // adding new element to the beginning of array
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Results for the extraLargeArray
// insert 8.3605591 s
// append 19.0784 ms

// Try it with first function
// perf.start();                     // Starts timer
// doublerAppend(extraLargeArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
// perf.start();
// doublerInsert(extraLargeArray);
// let resultsInsert = perf.stop();


// console.log('Results for the extraLargeArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);


var array_vars = {tinyArray: 'tinyArray', smallArray: 'smallArray', mediumArray: 'mediumArray', largeArray: 'largeArray', extraLargeArray: 'extraLargeArray'}
Object.keys(array_vars).forEach(test_arrays)

function test_arrays(item) {
    perf.start()
    doublerAppend(extraLargeArray);
    let resultsAppend = perf.stop()
    doublerInsert(extraLargeArray);
    let resultsInsert = perf.stop()

    console.log(`Results for the ${array_vars[item]}: insert ${resultsInsert.preciseWords}, append ${resultsAppend.preciseWords}\n`)
}

// Results for the tinyArray: insert 7.3263538 s, append 18.7179 ms
// Results for the smallArray: insert 7.301415 s, append 17.2171 ms
// Results for the mediumArray: insert 8.1627371 s, append 21.1052 ms
// Results for the largeArray: insert 8.6617622 s, append 14.1769 ms
// Results for the extraLargeArray: insert 7.718893 s, append 12.1313 ms