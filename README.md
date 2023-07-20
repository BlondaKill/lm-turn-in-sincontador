# lm-turn-in-sincontador

La Mala - E-commerce para el Cuidado del Cabello

La Mala
proyecto de E-commerce para el Cuidado del Cabello/Peluqueria! Este sitio web te permite comprar artículos diseñados especialmente para el cuidado del cabello de diferentes tipos: rubios, castaños y morochos. Puedes seleccionar tus productos favoritos, agregarlos al carrito de compras y finalizar la compra en el checkout. Además, antes de abonar, deberás completar un formulario de contacto que se enviará a la colección de órdenes. Cada compra actualiza automáticamente el inventario de productos en el e-commerce.

Tecnologías utilizadas

React Js: El proyecto utiliza React Js para construir la interfaz de usuario interactiva y dinámica.
Vite: Vite se ha utilizado como el bundler y herramienta de desarrollo para optimizar y agilizar el proceso de construcción del proyecto.
React Router: React Router permite la navegación entre diferentes páginas del sitio web sin necesidad de recargar la página.
Firebase: Se utiliza Firebase como la base de datos en tiempo real para almacenar la información de las órdenes y gestionar el stock del inventario.
Bootstrap: Bootstrap es el framework CSS utilizado para facilitar el diseño y la estructura responsiva del sitio web.
CSS: Además de Bootstrap, se ha implementado CSS personalizado para ajustar y mejorar el aspecto visual del proyecto.
JavaScript: Se utiliza JavaScript para la lógica y manipulación de datos en el lado del cliente.

Guía de instalación

1 - Clonar el repositorio
2 - Instalar dependencias
3 - Configurar Firebase:
4 - Crea una cuenta gratuita en Firebase (https://firebase.google.com/) si aún no tienes una.
5 - Crea un nuevo proyecto en Firebase y habilita la autenticación de correo electrónico y la base de datos en tiempo real.
6 - Copia la configuración de tu proyecto Firebase (apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId) y reemplázalos en el archivo firebase.js ubicado en el directorio src/firebase.
7 - Ejecutar la aplicación:
Esto iniciará la aplicación en modo de desarrollo. Abre tu navegador en http://localhost:3000 para ver el sitio web.


Funcionalidades principales

Selección de productos: Los usuarios pueden ver una lista de productos disponibles para cada tipo de cabello (rubios, castaños, morochos) y seleccionar los que deseen agregar al carrito de compras.
Carrito de compras: Los usuarios pueden agregar y eliminar productos del carrito de compras. Se muestra el monto total de la compra en el carrito.
Checkout y formulario de contacto: Antes de finalizar la compra, los usuarios deben completar un formulario de contacto que se enviará a la colección de órdenes en Firebase, 

Inventario: Además, para mantener un control adecuado del inventario, después de cada compra, la colección "inventario" en Firebase se actualiza automáticamente para reflejar el stock disponible de cada producto. Esto garantiza que los clientes solo puedan comprar productos que estén disponibles en el inventario y que el sitio web siempre muestre información precisa sobre el stock de productos.
lo que permite a La Mala mantener un registro de todas las órdenes realizadas por los clientes.
Gestión del inventario: Cada compra actualiza automáticamente el stock del inventario del e-commerce en Firebase, asegurando que los productos estén siempre actualizados.
