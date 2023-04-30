const products = [
    {
        id: '1',
        name: 'nike',
        price: 10000,
        category: 'zapatillas',
        img: 'https://www.nike.com.ar/zapatillas-air-jordan-1-high-3985-bq4422-400/p.png',
        stock: 25,
        description: 'descripcion de zapatillas nike'

    },
    {id: '2', name: 'adidas', price: 80000, category:'zapatillas', img:'https://www.adidas.com.ar/zapatillas-superstar/EG4958.html.png', description:'descripcion de zapatillas adidas'},
    {id: '3', name: 'puma', price: 10000, category:'zapatillas', img:'https://ar.puma.com/botines-de-futbol-ultra-ultimate-fg-ag-107163-01.html?color=10773', description:'descripcion de botines puma'}
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductbyId = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}


export const getProductsByCategory  = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}