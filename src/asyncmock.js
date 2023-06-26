const misProductos = [
    { id: 1, nombre: "aaa", precio: 200, img:"../img/lilas.JPG"},
    { id: 2, nombre: "aaa", precio: 200, img:"../img/green2.JPG"},
    { id: 3, nombre: "aaa", precio: 200, img:"../img/H.JPG"},
    { id: 4, nombre: "aaa", precio: 200, img:"../img/I.JPG"},
    { id: 5, nombre: "aaa", precio: 200, img:"../img/orange.JPG"},
    { id: 6, nombre: "aaa", precio: 200, img:"../img/multi.JPG"},    
    { id: 7, nombre: "aaa", precio: 200, img:"../img/rose.JPG"}, 
    { id: 8, nombre: "aaa", precio: 200, img:"../img/water.JPG"}, 
    { id: 9, nombre: "aaa", precio: 200, img:"../img/hair2.JPG"}, 
    { id: 10, nombre: "aaa", precio: 200, img:"../img/orange2.JPG"}, 
    { id: 11, nombre: "aaa", precio: 200, img:"../img/rose2.JPG"}, 
    { id: 12, nombre: "aaa", precio: 200, img:"../img/J.JPG"}, 
    
    
    
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);

        }, 2000)
    })
}