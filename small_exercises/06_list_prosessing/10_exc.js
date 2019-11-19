const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];


function transactionsFor(inventoryItem, transactions) {
  return transactions.filter( record => record.id === inventoryItem);
}

function isItemAvailable(inventoryItem, transactions) {
  const records = transactionsFor(inventoryItem, transactions);
  let total = 0;

  records.forEach((record) => {
    if (record.movement === 'in') total += record.quantity;
    if (record.movement === 'out') total -= record.quantity;
  });

  return total > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
