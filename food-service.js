function pizzaPanda(foodName, quantity) {
    if (foodName.toLowerCase() != 'pizza') { 
      return 'Sorry, we sell Pizza only.'
    } else if (quantity < 0) {
      return 'Sorry, use positive number'
    } else if (quantity > 10) {
      return 'Sorry, 10 pizza left'
    }
  
    var price = 10 * quantity
    var message ='Order successful!, Order info: ' + foodName + ', Price: ' + price + '$'
    return message;
  }
  
  console.log(pizzaPanda('Pizza', 10))