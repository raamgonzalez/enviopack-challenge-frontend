/* eslint-disable no-useless-catch */
export const getItems = async (search) => {
  try {
    const res = await fetch('./src/mocks/products.json') // Asegúrate de que la ruta sea correcta
    if (!res.ok) {
      throw new Error('No se pudo obtener la información')
    }

    const data = await res.json()
    const itemsData = await data.productos

    // Filtrar productos si hay un término de búsqueda, de lo contrario, mostrar todos los productos
    const filteredItems = search
      ? itemsData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
      : itemsData

    return filteredItems
  } catch (error) {
    throw error // Lanza el error nuevamente para que pueda ser manejado por el código que llama a esta función
  }
}
