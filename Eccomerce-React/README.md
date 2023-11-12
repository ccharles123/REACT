# Para correr el programa Ecommerce-React.

Debes clonar el repositorio (git clone), instalar las dependiencias (npm i), instalar Tailwind CSS (npm install install -D tailwindcss postcss outprefixer, npx tailwindcss init -P), instalar heroicons (npm install @heroicons/react), sweetalert (npm install sweetalert) por ultimo debes correr el programar (npm run dev).

# ECOMMERCE - SHOPI

## Descripción del Proyecto

ECOMMERCE - SHOPI es una aplicación web desarrollada utilizando **React** y **Tailwind CSS**, con el objetivo de crear una experiencia de compra intuitiva y eficiente. La aplicación se conecta a una API para obtener información sobre los productos disponibles.

## Características Principales

1. **Visualización de Productos:**
   - Los productos se presentan en tarjetas (cards) en la página principal (Home).
   - Al hacer clic en una tarjeta, se despliega una pestaña en el lado derecho de la página con detalles como la foto, precio, nombre y descripción del producto seleccionado.

2. **Añadir a la Compra:**
   - Al hacer clic en el botón "+" en una tarjeta (card) en la pagina procinpal (Home), se agrega el producto a la sección "My-Order".
   - En "My-Order", cada producto tiene su propia tarjeta con información detallada, incluyendo foto, cantidad, nombre y total individual.
   - En "My-Order", se genera un total general de los articulos seleccionados de la orden. 

3. **Gestión de Compras:**
   - En "My-Order", se pueden eliminar productos individualmente para ajustar la orden.
   - El botón "Checkout" permite almacenar la orden actual en la página "My-Orders".

4. **Historial de Compras:**
   - La página "My-Orders" muestra una lista de órdenes almacenadas en forma de tarjetas (Cards).
   - Cada orden en la lista incluye información como fecha, hora, cantidad de artículos y total de la orden.

5. **Filtrado por Categorías:**
   - En el navbar, se encuentran las categorías que permiten filtrar productos por tipo en la página principal.

## Tecnologías Utilizadas

- **React:** Para la construcción de la interfaz de usuario.
- **Tailwind CSS:** Para el diseño y estilos de la aplicación.
- **CSS:** Para el animaciones en el diseño.
- **Heroicons:** Utilizados para agregar iconos a la interfaz de usuario.
- **Sweetalert:** Implementado para mejorar la experiencia del usuario al mostrar alertas.

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local.
   ```bash
   git clone https://github.com/ccharles123/REACT/tree/main/Eccomerce-React
   ```

2. Instala las dependencias.
   ```bash
   npm install
   ```

3. Instala las Tailwind CSS, Heroicons y sweetalert.

   ```bash
   npm install install -D tailwindcss postcss outprefixer
   npx tailwindcss init -P
   npm install @heroicons/react
   npm install sweetalert
   ```

3. Inicia la aplicación.
   ```bash
   npm run dev
   ```

4. Accede a la aplicación en tu navegador [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

## Capturas de Pantalla

**Home**
![Home](/src/Images/image.png)
**Visualización de Productos**
![Visualización de Productos](/src/Images/image-1.png)
**Añadir a la Compra**
![Añadir a la Compra](/src/Images/image-2.png)
**Gestión de Compras:Checkout**
![Gestión de Compras:Checkout](/src/Images/image-3.png)
**Historial de Compras**
![Historial de Compras:](/src/Images/image-4.png)
**Filtrado por Categorías**
![Filtrado por Categorías:](/src/Images/image-5.png)

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún problema o tienes sugerencias para mejorar el proyecto, por favor, crea un issue o envía un pull request.
