export const getItems = async ({ index, ITEMS_PER_PAGE, search }) => {
  try {
    const res = await fetch('./src/mocks/products.json')
    const data = await res.json()
    const items = data.productos
    console.log(search)
    console.log(items)
    // const searchItems = items.filter((item, search) => {
    //   if (search !== null) { item.title.toLowerCase().includes(search.toLowerCase()) }
    // })
    return ([...items].splice(index, ITEMS_PER_PAGE))
  } catch (error) {
    console.log(error.message)
  }
}
