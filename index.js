var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    cart.push({ itemName : item, itemPrice : Math.floor(Math.random()*100+ 1) })
   return `${item} has been added to your cart.`
 }

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var sent = 'In your cart, you have';
  for (let i = 0; i < cart.length; item++) {
    if (cart.length === 1) {
      return `${sent} ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    else if (cart.length === 2) {
      return `${sent} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
    } else {
      var aSent = "In your cart, you have "
      for(var i = 0; i < cart.length - 1; i++) {
      aSent = aSent + `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      return aSent + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    }
    }
  }

function total() {
  let cartSum = 0
  for (let i = 0; i < cart.length; i++) {
    cartSum += cart[i].itemPrice;
  }
  return cartSum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  }

}

function placeOrder(cardNumber) {
  // write your code here
}
