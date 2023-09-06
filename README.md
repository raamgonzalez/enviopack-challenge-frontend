# Envíopack - Challenge Frontend React              <img src="https://www.enviopack.com/img/general/logo-black.png" style="margin-left:40px;align-items: center;" />


## Objetivo
El challenge consiste en crear una aplicación web en React imitando una tienda e-commerce a partir de
un archivo JSON con la información del usuario y los productos. El aspecto debe acercarse lo más
posible al representado en las capturas de pantalla.

## Requisitos
- El proyecto debe desarrollarse en React y llamarse enviopack-challenge-frontend
- Alojar el proyecto en Github en un repositorio público
- Crear los componentes de UI

## Pantallas

### Catálogo

<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/vm1NwQVd/Catalogo.jpg" alt="Catalogo"/></a><br/><br/>

- El layout principal cuenta con una barra de navegación superior y el contenido.
La barra de navegación contiene un link que redirige al catálogo, del lado derecho: nombre de usuario,
un link con acceso al carrito y la cantidad de items agregados (cantidad), y crédito disponible.
- En esta pantalla, se debe renderizar el listado de productos sin un orden en particular.
- Cada producto cuenta con su imagen, nombre, importe y acciones (“Agregar al carrito” o “Ver carrito”).
- El listado contará con paginación mostrando 6 productos por página.
- Además contará con un campo de texto para filtrar los productos por nombre a medida que se ingresan
caracteres, y un combo de opciones para ordenar los productos (“seleccionar”, “más baratos”, “más
caros”).
- La acción “Agregar al carrito” debe agregar dicho producto al carrito de compras.
- En caso de que dicho producto haya sido agregado al carrito, se mostrará la opción de “Ver carrito” y
deberá redirigir a la próxima pantalla.

### Carrito

<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/gkdQLFfv/Carrito.jpg" alt="Carrito"/></a><br/><br/>

- En la pantalla de Carrito se deben mostrar los productos previamente agregados.
- Cada producto podrá eliminarse del carrito de forma individual.
- Debe mostrarse el importe total de los productos agregados.
- Debajo del carrito deberán aparecer dos acciones, una para volver a la pantalla anterior y otra para
finalizar la compra.

### Estado de compra: Éxito

<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/RZpDY3qR/Estado-exito.jpg" alt="Estado-exito"/></a><br/><br/>

- En la pantalla de Estado de la compra se deberá mostrar la pantalla correspondiente al resultado de la
diferencia entre el crédito disponible y el importe total de los productos.
- Si la diferencia es cero o positiva, se debe mostrar un mensaje de éxito con una acción para volver a la
pantalla de catálogo.
- El importe total debe descontarse del crédito disponible y el contador de productos agregados al carrito
en la barra de navegación debe restaurarse en cero (0).

### Estado de compra: Error

<a href="https://postimages.org/" target="_blank"><img src="https://i.postimg.cc/qvvFQcBq/Estado-error.jpg" alt="Estado-error"/></a><br/><br/>

- Caso contrario, si la diferencia es negativa, debe mostrarse un mensaje informativo de error con la
compra y una acción que dirija a la pantalla previa del carrito.
