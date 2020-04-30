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
  var sent = 'In your cart, you have';
  for (let i = 0; i < cart.length; item++) {
    if (cart.length === 1) {
      return `${sent} ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else if (cart.length === 2) {
      return `${sent} ${cart[i].itemName} at $${cart[i].itemPrice} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
  }

}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
