import { readData } from './readData.js';

export const getProducts = async () => {
    let data = await readData('https://dummyjson.com/products');
    console.log(data);
    return data.products;
}

export const getProductsInfo = async (id: String) => {
    let data = await readData('https://dummyjson.com/products');
    console.log(id);
    return data.products.find((x: any) => x.id == id);
}