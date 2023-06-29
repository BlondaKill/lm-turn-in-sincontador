const misProductos = [
    { id: 1, nombre: "aaa", precio: 200, img:"../img/lilas.JPG", idCat: "Blondes"},
    { id: 2, nombre: "aaa", precio: 200, img:"../img/green2.JPG", idCat:"Blondes"},
    { id: 3, nombre: "aaa", precio: 200, img:"../img/H.JPG", idCat:"Blondes"},
    { id: 4, nombre: "aaa", precio: 200, img:"../img/I.JPG", idCat:"Blondes"},
    { id: 5, nombre: "aaa", precio: 200, img:"../img/orange.JPG", idCat:"Brown"},
    { id: 6, nombre: "aaa", precio: 200, img:"../img/multi.JPG", idCat:"Brown"},    
    { id: 7, nombre: "aaa", precio: 200, img:"../img/rose.JPG", idCat:"Brown"}, 
    { id: 8, nombre: "aaa", precio: 200, img:"../img/water.JPG", idCat:"Brown"}, 
    { id: 9, nombre: "aaa", precio: 200, img:"../img/hair2.JPG", idCat:"Darks"}, 
    { id: 10, nombre: "aaa", precio: 200, img:"../img/orange2.JPG", idCat:"Darks"}, 
    { id: 11, nombre: "aaa", precio: 200, img:"../img/rose2.JPG", idCat:"Darks"}, 
    { id: 12, nombre: "aaa", precio: 200, img:"../img/J.JPG", idCat:"Darks"},   
    
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}






