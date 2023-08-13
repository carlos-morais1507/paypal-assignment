export function generateCart() {
  const cart = [
    {
      imgUrl: 'https://images.pexels.com/photos/13094233/pexels-photo-13094233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Grey Shirt',
      price: 32,
      quantity: 1
    },
    {
      imgUrl: 'https://images.pexels.com/photos/7764611/pexels-photo-7764611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Jeans',
      price: 28,
      quantity: 1
    }
  ]

  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('totalPrice', JSON.stringify(0))
}