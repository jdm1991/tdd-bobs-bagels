class BagelBasket {
  constructor(capacity = 4) {
    this.capacity = capacity
    this.items = []
  }

  isFull() {
    return this.items.length >= this.capacity
  }

  findItemIndexByName(itemName) {
    return this.items.findIndex((item) => item.name === itemName)
  }

  findItemBySKU(sku) {
    return this.items.find((item) => item.sku === sku)
  }

  addItem(item) {
    if (this.isFull()) {
      console.log('Cannot add item, basket is full')
      return 'Cannot add item, basket is full'
    }
    this.items.push(item)
  }

  removeItem(itemToRemove) {
    const index = this.findItemIndexByName(itemToRemove.name)
    if (index !== -1) {
      this.items.splice(index, 1)
    } else {
      return 'Item not found'
    }
  }

  getItemPrice(item) {
    return Number(item.price)
  }

  findBagel(sku) {
    const item = this.findItemBySKU(sku)
    return item || "Item doesn't exist in basket"
  }

  getTotalPrice() {
    return this.items.reduce(
      (total, item) => total + this.getItemPrice(item),
      0
    )
  }
}

module.exports = BagelBasket
