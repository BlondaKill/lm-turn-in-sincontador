const misProductos = [
    { id: Blondes, nombre: "aaa", precio: 200, img:"../img/lilas.JPG", idCat: Blondes},
    { id: Blondes, nombre: "aaa", precio: 200, img:"../img/green2.JPG", idCat:Blondes},
    { id: Blondes, nombre: "aaa", precio: 200, img:"../img/H.JPG", idCat:Blondes},
    { id: Blondes, nombre: "aaa", precio: 200, img:"../img/I.JPG", idCat:Blondes},
    { id: Brown, nombre: "aaa", precio: 200, img:"../img/orange.JPG", idCat:Brown},
    { id: Brown, nombre: "aaa", precio: 200, img:"../img/multi.JPG", idCat:Brown},    
    { id: Brown, nombre: "aaa", precio: 200, img:"../img/rose.JPG", idCat:Brown}, 
    { id: Brown, nombre: "aaa", precio: 200, img:"../img/water.JPG", idCat:Brown}, 
    { id: Darks, nombre: "aaa", precio: 200, img:"../img/hair2.JPG", idCat:Darks}, 
    { id: Darks, nombre: "aaa", precio: 200, img:"../img/orange2.JPG", idCat:Darks}, 
    { id: Darks, nombre: "aaa", precio: 200, img:"../img/rose2.JPG", idCat:Darks}, 
    { id: Darks, nombre: "aaa", precio: 200, img:"../img/J.JPG", idCat:Darks}, 
    
    
    
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







export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);

    }, 2000)

    })
}