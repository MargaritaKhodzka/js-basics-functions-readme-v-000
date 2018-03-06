function validateSelection(selection) {
  switch (selection) {
    case 'Pretzels':
    case 'Chips':
    case 'Water':
      return true
    default:
      return false
  }
}

function vendingMachine(snackSelection, moneyInserted) {
  if (validateSelection(snackSelection) === false) {
    return 'Please select a valid snack'
  }

  const price = getPrice(snackSelection)

  if (price > moneyInserted) {
    return `Please insert more to purchase ${snackSelection}.`
  }

  const change = moneyInserted - price

  return `${snackSelection} dispensed. Your change is ${change}. Thank you!`
}

function getPrice(selection) {
  switch (selection) {
    case 'Pretzels':
      return 100
    case 'Chips':
      return 75
    case 'Water':
      return 50
  }
}
const firstMessage = vendingMachine('Pretzels', 500)
const secondMessage = vendingMachine('Ice Cream', 100)
const thirdMessage = vendingMachine('Water', 25)

firstMessage
secondMessage
thirdMessage

// function vendingMachine(snackSelection, moneyInserted) {
//   switch (snackSelection) {
//     case 'Pretzels':
//       if (moneyInserted >= 100) {
//         const change = moneyInserted - 100
//         return `${snackSelection} dispensed. Your change is ${change}. Thank you!`
//       } else {
//         return `Please insert more to purchase ${snackSelection}.`
//       }
//
//     case 'Chips':
//       if (moneyInserted >= 75) {
//         const change = moneyInserted - 75
//         return `${snackSelection} dispensed. Your change is ${change}. Thank you!`
//       } else {
//         return `Please insert more to purchase ${snackSelection}.`
//       }
//
//     case 'Water':
//       if (moneyInserted >= 50) {
//         const change = moneyInserted - 50
//         return `${snackSelection} dispensed. Your change is ${change}. Thank you!`
//       } else {
//         return `Please insert more to purchase ${snackSelection}.`
//       }
//
//     default:
//       return 'Please select a valid snack.'
//   }
// }
//
