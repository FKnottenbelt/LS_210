const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  const result = {};

  array.forEach((vehicle) => {
    if (Object.keys(result).includes(vehicle)) {
      result[vehicle] += 1;
    } else {
      result[vehicle] = 1;
    }
  });

  for (let i in result) {
    console.log(`${i} => ${result[i]}`);
  }

}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2