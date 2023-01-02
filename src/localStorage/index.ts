export function setProductsCartToLocal(cart: object) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function getProductsCartFromLocal() {
    const cart = localStorage.getItem('cart')
    return cart === null ? null : JSON.parse(cart)
}

