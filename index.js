const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accumulator, batch) {
  return accumulator + batch;
}, 0);  // The 0 = initial value 

console.log(totalBatteries); 

