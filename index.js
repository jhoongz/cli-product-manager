const args = process.argv.slice(2);
const method = args[0];
const resource = args[1];

const BASE_URL = 'https://fakestoreapi.com';

async function gestionarProductos() {
    if (!method || !resource) {
        console.log("Error: Debes ingresar un método y un recurso. Ejemplo: npm run start GET products");
        return;
    }

    const endpoint = `${BASE_URL}/${resource}`;

    try {
        // Consultar Todos los Productos o Consultar un Producto Específico
        if (method === 'GET') {
            const response = await fetch(endpoint);
            const data = await response.json();
            console.log("================ RESULTADO GET ================");
            console.log(data);
        } 
        
        // Crear un Producto Nuevo
        else if (method === 'POST') {
            const title = args[2];
            const price = Number(args[3]);
            const category = args[4];

            if (!title || !price || !category) {
                console.log("Error: Faltan datos. Formato: POST products <title> <price> <category>");
                return;
            }

            const newProduct = {
                title: title,
                price: price,
                category: category
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            
            const data = await response.json();
            console.log("================ PRODUCTO CREADO ================");
            console.log(data);
        } 
        
        // Eliminar un Producto
        else if (method === 'DELETE') {
            const response = await fetch(endpoint, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log("================ PRODUCTO ELIMINADO ================");
            console.log(data);
        } 
        
        else {
            console.log("Método no reconocido. Usa GET, POST o DELETE.");
        }

    } catch (error) {
        console.error("Hubo un error al comunicarse con la API:", error.message);
    }
}

// Ejecutamos la función principal
gestionarProductos();