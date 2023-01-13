import got from 'got';
/**
 * Read Data
 */
export const readData = async (url) => await got.get(url).json();
