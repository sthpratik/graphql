import { readData } from './readData';
export const getProducts = async () => {
    let data = await readData('https://dummyjson.com/products');
    console.log(data);
    return data.products;
};
