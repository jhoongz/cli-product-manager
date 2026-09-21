# Proyecto Pre-Entrega - Gestión de Productos (CLI)

Este proyecto es una aplicación de línea de comandos (CLI) desarrollada en Node.js. Su objetivo principal es gestionar productos de una tienda en línea interactuando con la API pública [FakeStore API](https://fakestoreapi.com/).

El desarrollo cumple con los requerimientos de la "Pre-Entrega de Proyecto", demostrando el uso de ES Modules, manejo de argumentos por consola (`process.argv`), y peticiones asíncronas con `fetch`.

## 🚀 Características

La aplicación permite realizar las siguientes acciones directamente desde la terminal:

- **Consultar todos los productos:** Obtiene la lista completa de productos disponibles en la tienda.
- **Consultar un producto específico:** Busca un producto mediante su identificador (`ID`).
- **Crear un nuevo producto:** Envía datos básicos (título, precio y categoría) para simular la creación de un artículo nuevo.
- **Eliminar un producto:** Simula la eliminación de un producto existente por su `ID`.

## 🛠️ Tecnologías utilizadas

- **JavaScript (ES6+)**
- **Node.js** (Entorno de ejecución)
- **ES Modules** (`import` / `export`)
- **Fetch API** (Para peticiones HTTP)

## 📋 Requisitos previos

Para poder ejecutar este proyecto, necesitas tener instalado en tu computadora:

- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada para soporte nativo de `fetch`).

## 🔧 Instalación y Configuración

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <url-de-tu-repositorio>
   ```

2. Navega a la carpeta del proyecto:
   ```bash
   cd <nombre-de-la-carpeta>
   ```

3. (Opcional) Si no clonaste el `package.json`, puedes inicializar el proyecto ejecutando:
   ```bash
   npm init -y
   ```
   *Nota: Asegúrate de que tu `package.json` tenga configurado `"type": "module"` y el script `"start": "node index.js"`.*

## 💻 Uso de la herramienta

El programa se ejecuta utilizando el comando `npm run start` seguido del método y el recurso que deseas consultar o modificar.

### 1. Consultar todos los productos (GET)
```bash
npm run start GET products
```

### 2. Consultar un producto específico (GET)
Reemplaza `<id>` con el número del producto (ej: 15).
```bash
npm run start GET products/<id>
```

### 3. Crear un nuevo producto (POST)
Debes enviar el título, el precio y la categoría separados por espacios.
```bash
npm run start POST products "T-Shirt-Rex" 300 "remeras"
```
*(Nota: Si el título o la categoría tienen espacios, escríbelos entre comillas).*

### 4. Eliminar un producto (DELETE)
Reemplaza `<id>` con el número del producto que deseas eliminar (ej: 7).
```bash
npm run start DELETE products/<id>
```

## ✒️ Autor

- **Nombre / Usuario de GitHub** - [Jonathan Gómez](https://github.com/jhoongz)

---
*Proyecto desarrollado como parte de los desafíos de Talentotech.*
