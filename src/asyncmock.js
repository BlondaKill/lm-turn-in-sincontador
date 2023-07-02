const misProductos = [{
        id: 1,
        nombre: "Blonde Revival",
        precio: 200,
        img: "../img/lilas.JPG",
        idCat: "Blondes",
    },
    {
        id: 2,
        nombre: "Aveda Shampoo",
        precio: 200,
        img: "../img/br9.JPG",
        idCat: "Brunette",
    },
    {
        id: 3,
        nombre: "Ouai Wax",
        precio: 200,
        img: "../img/H.JPG",
        idCat: "Blondes"
    },
    {
        id: 4,
        nombre: "Aveda Conditioner",
        precio: 200,
        img: "../img/d1.JPG",
        idCat: "Darks"
    },
    {
        id: 5,
        nombre: "Pulp Detox",
        precio: 200,
        img: "../img/orange.JPG",
        idCat: "Brunette"
    },
    {
        id: 6,
        nombre: "Elgon Haircolor",
        precio: 200,
        img: "../img/b8.JPG",
        idCat: "Blondes",
    },
    {
        id: 7,
        nombre: "Master's Organics",
        precio: 200,
        img: "../img/rose.JPG",
        idCat: "Brunette"
    },
    {
        id: 8,
        nombre: "Elixir Ultime Huile",
        precio: 200,
        img: "../img/b11.JPG",
        idCat: "Blondes",
    },
    {
        id: 9,
        nombre: "OGX Butter Cream",
        precio: 200,
        img: "../img/orange2.JPG",
        idCat: "Darks",
    },
    {
        id: 10,
        nombre: "OGX Coconut Oil ",
        precio: 200,
        img: "../img/br10.JPG",
        idCat: "Brunette",
    },
    {
        id: 11,
        nombre: "Roses Cream Hair",
        precio: 200,
        img: "../img/rose2.JPG",
        idCat: "Darks",
    },
    {
        id: 12,
        nombre: "Maui Moisture",
        precio: 200,
        img: "../img/b9.JPG",
        idCat: "Blondes"
    },
    {
        id: 13,
        nombre: "Tidal Water Cream",
        precio: 200,
        img: "../img/water.JPG",
        idCat: "Brunette"
    },
    {
        id: 14,
        nombre: "Light Hydration",
        precio: 200,
        img: "../img/b7.JPG",
        idCat: "Blondes"
    },
    {
        id: 15,
        nombre: "Heal & Hydrate Kit",
        precio: 200,
        img: "../img/multi.JPG",
        idCat: "Brunette"
    },
    {
        id: 16,
        nombre: "Midnight Amethyst",
        precio: 200,
        img: "../img/d7.JPG",
        idCat: "Darks"
    },
    {
        id: 17,
        nombre: "Bonder Plex",
        precio: 200,
        img: "../img/b15.JPG",
        idCat: "Blondes"
    },
    {
        id: 18,
        nombre: "Monat C & L",
        precio: 200,
        img: "../img/b0.JPG",
        idCat: "Blondes"
    },
    {
        id: 19,
        nombre: "India Hair Icon",
        precio: 200,
        img: "../img/br1.JPG",
        idCat: "Brunette"
    },
    {
        id: 20,
        nombre: "FURTERER Curbicia",
        precio: 200,
        img: "../img/green2.JPG",
        idCat: "Darks"
    },
    {
        id: 21,
        nombre: "Amika Kure Hair",
        precio: 200,
        img: "../img/fix.jpg",
        idCat: "Brunette"
    },
    {
        id: 22,
        nombre: "BYREDO",
        precio: 200,
        img: "../img/hair2.JPG",
        idCat: "Darks"
    },
    {
        id: 23,
        nombre: "Cream Hair Mask",
        precio: 200,
        img: "../img/I.JPG",
        idCat: "Brunette"
    },
    {
        id: 24,
        nombre: "Amika Wizard",
        precio: 200,
        img: "../img/threes.jpg",
        idCat: "Blondes"
    },
    {
        id: 25,
        nombre: "Aesop Avocado",
        precio: 200,
        img: "../img/J.JPG",
        idCat: "Darks"
    },
    {
        id: 26,
        nombre: "Schwarzkopf Palette",
        precio: 200,
        img: "../img/b1.JPG",
        idCat: "Blondes"
    },
    {
        id: 27,
        nombre: "Schwarzkopf Ultime",
        precio: 200,
        img: "../img/br11.JPG",
        idCat: "Brunette"
    },
    {
        id: 28,
        nombre: "Schwarzkopf LIVE",
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