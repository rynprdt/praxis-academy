// contoh syntax switch-case

// switch (expression) {
//     case label_1:
//       statements_1
//       [break;]
//     case label_2:
//       statements_2
//       [break;]
//       ...
//     default:
//       statements_def
//       [break;]
//   }

//   contoh penerapannya:
var fruittype = 'Manggo'
  switch (fruittype) {
    case 'Jackfruit':
      console.log('Jackfruit are $0.59 a pound.');
      break;
    case 'Apple':
      console.log('Apple are $0.32 a pound.');
      break;
    case 'Banana':
      console.log('Banana are $0.48 a pound.');
      break;
    case 'Papaya':
      console.log('Papaya are $3.00 a pound.');
      break;
    case 'Durian':
      console.log('Durian are $0.56 a pound.');
      break;
    case 'Orange':
      console.log('Orange are $2.79 a pound.');
      break;
    default:
     console.log('Sorry, we are out of ' + fruittype + '.');
  }
  console.log("Is there anything else you'd like?");