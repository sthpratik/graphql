import got from 'got';
/**
 * Read Data
 */
export const readData = async (url: string): Promise<any> => await got.get(url).json();

