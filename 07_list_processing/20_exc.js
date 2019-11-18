const bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(string) {
  const words = string.split(' ');
  return words.map(word => word[0].toUpperCase()
    + word.slice(1)).join(' ');
}

function processBands(data) {
  return data.map((band) => {
    let newName = capitalize(band.name);
    newName = newName.replace(/[.]/g, '');

    return {
      name: newName,
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

console.log(capitalize('hello there'));
console.log(bands);
