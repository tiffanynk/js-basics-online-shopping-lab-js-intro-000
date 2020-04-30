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
  } else if (cart.length > 0) {
    let listCart = cart.map((item, index) => {
    if (index === 0) {
      return   `In your cart, you have ${itemName} at ${itemPrice}`
    } else if (cart[index+1]){
      return `, ${itemName} at ${itemPrice}`
    } else {
      return `, ${itemName} at ${itemPrice}`
    } 
    return listCart.join(',') + '.'
    })
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
