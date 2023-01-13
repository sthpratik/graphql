import { readData } from './readData';
export const getCarts = async () => {
    let data = await readData('https://dummyjson.com/carts');
    console.log(data);
    return data.products;
};
