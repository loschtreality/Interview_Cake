// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean of all temps we've seen so far
// getMode()—returns a mode of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..110.

// If there is more than one mode, return any of the modes.

// Clarifications:
// Will there ever be a need to look up or delete a previous value?

// Ideas:
  // This class can keep track of the min / max temp using conditionals in the insert statement.
  // However, there will need to be some sort of storage in order to get the mode since it depends
  // on the frequency of numbers inserted into the set. The most straightforward way to store these
  // frequencies would be to use a hash / object. There will be a variable outside that data structure
  // to keep track of which mode is most frequent.

// Complexities:

  // insert
    // Time: o(1)
    // Space: o(1) <-- This is due to an upper / lower temperature bound

  // getMax
    // Time: o(1)
    // Space: o(1)

  // getMin
    // Time: o(1)
    // Space: o(1)

  // getMean
    // Time: o(1)
    // Space: o(1)

  // getMode
    // Time: o(1)
    // Space: o(1)

class TempTracker {
  constructor() {
    // Min / Max
    this.minTemp = Infinity
    this.maxTemp = -Infinity

    // Average (Mean)
    this.tempSum = 0
    this.tempCount = 0

    // Frequency (Mode)
    this.tempTable = {}
    this.freqentTemp = [/* frequency, temperature */] // tuple
  }

  insert(temp) {
    if (temp > 110 || temp < 0) return Error("Temperature out of range")
    if (temp > this.maxTemp) this.maxTemp = temp
    if (temp < this.minTemp) this.minTemp = temp

    this.tempSum += temp
    this.tempCount++

    if (!this.tempTable[temp]) this.tempTable[temp] = 0
    this.tempTable[temp]++

    const [ mostFrequent, mostTemp ] = this.freqentTemp

    if (this.freqentTemp[0] === undefined || this.tempTable[temp] > mostFrequent) {
      this.freqentTemp[0] = this.tempTable[temp] // set frequency
      this.freqentTemp[1] = temp // set temperature
    }
  }

  getMax() {
    return this.maxTemp
  }

  getMin() {
    return this.minTemp
  }

  getMean() {
    return this.tempSum / this.tempCount
  }

  getMode() {
    return this.freqentTemp[1]
  }

}


const tt = new TempTracker()
tt.insert(10)
tt.insert(20)
tt.insert(30)
tt.insert(40)
tt.insert(40)
tt.insert(40)
tt.insert(50)
tt.insert(40)
tt.insert(20)
tt.insert(20)
tt.insert(40)

console.log(tt.getMax(), "Max")
console.log(tt.getMin(), "Min")
console.log(tt.getMean(), "Mean")
console.log(tt.getMode(), "Mode")
