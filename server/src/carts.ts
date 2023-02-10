import { readData } from './readData.js';

export const getCarts = async () => {
    let data = await readData('https://dummyjson.com/carts');
    //console.log(data);
    return data.carts;
}

