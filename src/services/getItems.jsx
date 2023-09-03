export const getItems = async () => {
  try {
    const res = await fetch('./src/mocks/products.json')
    const data = await res.json()
    const items = data.productos
    return items
  } catch (error) {
    console.log(error.message)
  }
}
