export const getItems = async (page = 0) => {
  try {
    const res = await fetch('./src/mocks/products.json')
    const data = await res.json()
    const items = data.productos
    return items
  } catch (error) {
    console.log(error.message)
  }
}
