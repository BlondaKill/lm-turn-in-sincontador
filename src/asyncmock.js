const misProductos = [{
        id: 1,
        nombre: "a",
        precio: 200,
        img: "../img/lilas.JPG",
        idCat: "Blondes",
    },
    {
        id: 2,
        nombre: "b",
        precio: 200,
        img: "../img/br9.JPG",
        idCat: "Brown",
    },
    {
        id: 3,
        nombre: "c",
        precio: 200,
        img: "../img/H.JPG",
        idCat: "Blondes"
    },
    {
        id: 4,
        nombre: "d",
        precio: 200,
        img: "../img/d1.JPG",
        idCat: "Darks"
    },
    {
        id: 5,
        nombre: "e",
        precio: 200,
        img: "../img/orange.JPG",
        idCat: "Brown"
    },
    {
        id: 6,
        nombre: "aaa",
        precio: 200,
        img: "../img/b8.JPG",
        idCat: "Blondes",
    },
    {
        id: 7,
        nombre: "aaa",
        precio: 200,
        img: "../img/rose.JPG",
        idCat: "Brown"
    },
    {
        id: 8,
        nombre: "aaa",
        precio: 200,
        img: "../img/b11.JPG",
        idCat: "Blondes",
    },
    {
        id: 9,
        nombre: "aaa",
        precio: 200,
        img: "../img/orange2.JPG",
        idCat: "Darks",
    },
    {
        id: 10,
        nombre: "aaa",
        precio: 200,
        img: "../img/br10.JPG",
        idCat: "Brown",
    },
    {
        id: 11,
        nombre: "aaa",
        precio: 200,
        img: "../img/rose2.JPG",
        idCat: "Darks",
    },
    {
        id: 12,
        nombre: "aaa",
        precio: 200,
        img: "../img/b9.JPG",
        idCat: "Blondes"
    },
    {
        id: 13,
        nombre: "aaa",
        precio: 200,
        img: "../img/water.JPG",
        idCat: "Brown"
    },
    {
        id: 14,
        nombre: "aaa",
        precio: 200,
        img: "../img/b7.JPG",
        idCat: "Blondes"
    },
    {
        id: 15,
        nombre: "aaa",
        precio: 200,
        img: "../img/multi.JPG",
        idCat: "Brown"
    },
    {
        id: 16,
        nombre: "aaa",
        precio: 200,
        img: "../img/d7.JPG",
        idCat: "Darks"
    },
    {
        id: 17,
        nombre: "aaa",
        precio: 200,
        img: "../img/b15.JPG",
        idCat: "Blondes"
    },
    {
        id: 18,
        nombre: "aaa",
        precio: 200,
        img: "../img/b0.JPG",
        idCat: "Blondes"
    },
    {
        id: 19,
        nombre: "aaa",
        precio: 200,
        img: "../img/br1.JPG",
        idCat: "Brown"
    },
    {
        id: 20,
        nombre: "aaa",
        precio: 200,
        img: "../img/green2.JPG",
        idCat: "Darks"
    },
    {
        id: 21,
        nombre: "aaa",
        precio: 200,
        img: "../img/br85.JPG",
        idCat: "Brown"
    },
    {
        id: 22,
        nombre: "aaa",
        precio: 200,
        img: "../img/hair2.JPG",
        idCat: "Darks"
    },
    {
        id: 23,
        nombre: "aaa",
        precio: 200,
        img: "../img/I.JPG",
        idCat: "Brown"
    },
    {
        id: 24,
        nombre: "aaa",
        precio: 200,
        img: "../img/b2.JPG",
        idCat: "Blondes"
    },
    {
        id: 25,
        nombre: "aaa",
        precio: 200,
        img: "../img/J.JPG",
        idCat: "Darks"
    },
    {
        id: 26,
        nombre: "aaa",
        precio: 200,
        img: "../img/b1.JPG",
        idCat: "Blondes"
    },
    {
        id: 27,
        nombre: "aaa",
        precio: 200,
        img: "../img/br11.JPG",
        idCat: "Brown"
    },
    {
        id: 28,
        nombre: "aaa",
        precio: 200,
        img: "../img/d5.JPG",
        idCat: "Darks"
    },



];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100);
    });
};

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find((prod) => prod.id === parseInt(id));
            resolve(producto);
        }, 100);
    });
};

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(
                (prod) => prod.idCat === idCategoria
            );
            resolve(productosCategoria);
        }, 100);
    });
};