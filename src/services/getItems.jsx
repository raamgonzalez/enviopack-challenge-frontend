export const getItems = async () => {
  try {
    // setLoading(true)
    const res = await fetch('./src/mocks/products.json')
    const data = await res.json()
    return data.products
    // setLoading(false)
  } catch (error) {
    console.log(error.message)
    // setLoading(false)
  }
}
getItems()
