// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as objects with attributes startTime and endTime . These integers represent the number of 30-minute blocks past 9:00am.

// For example:

// {startTime: 2, endTime: 3} meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]

// your function would return:

//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

// Do not assume the meetings are in order. The meeting times are coming from multiple teams.

// Write a solution that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplified our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where startTime and endTime don't have an upper bound.


const mergeRanges = (meetRange) => {
    const result = []

    let lowestTime = 0
    let highestTime = 0

    meetRange.forEach((meetTime, idx) => {
        let newBlock = {}
        let newBlockCreated = false
        let uniqueRange = false
        meetRange.forEach((secondaryTime, jdx) => {
            if (idx === jdx) return;

            if (
                meetTime.startTime <= secondaryTime.startTime &&
                meetTime.endTime <= secondaryTime.endTime &&
                meetTime.endTime >= secondaryTime.startTime
            ) {
                newBlock.startTime = meetTime.startTime
                newBlock.endTime = secondaryTime.endTime
                newBlockCreated = true
            } else if (
                (meetTime.startTime < secondaryTime.startTime &&
                    meetTime.endTime > secondaryTime.endTime) ||
                (meetTime.startTime < secondaryTime.startTime &&
                    meetTime.endTime < secondaryTime.endTime
                )
            ) {
                uniqueRange = true
            }
        })
        if (newBlockCreated) {
            result.push(newBlock)
        } else if (uniqueRange) {
            result.push(meetTime)
        }
    })


    return result
}


const test2 = [{
        startTime: 0,
        endTime: 1
    },
    {
        startTime: 3,
        endTime: 5
    },
    {
        startTime: 4,
        endTime: 8
    },
    {
        startTime: 10,
        endTime: 12
    },
    {
        startTime: 9,
        endTime: 10
    },
];

// console.log(mergeRanges([{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}])) // [{startTime: 1, endTime: 4}]
// console.log(mergeRanges([{startTime: 1, endTime: 2}, {startTime: 2, endTime: 3}])) // [{startTime: 1, endTime: 3}]
// console.log(mergeRanges([{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}])) // [{startTime: 1, endTime: 5}]
console.log(mergeRanges(test2)) // [{startTime: 0, endTime: 1}, {startTime: 3, endTime: 8}, {startTime: 9, endTime: 12}]
