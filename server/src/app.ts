import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
//import { getProducts } from './products';
//import { getCarts } from './carts';
import got from 'got';



export const readData = async (url: string): Promise<any> => await got.get(url).json();


export const getProducts = async () => {
  let data = await readData('https://dummyjson.com/products');
  //console.log(data);
  return data.products;
}

export const getProductsInfo = async (id: String) => {
  let data = await readData('https://dummyjson.com/products');
  console.log(id);
  return data.products.find((x: any) => x.id == id);
}

export const getCarts = async () => {
  let data = await readData('https://dummyjson.com/carts');
  //console.log(data);
  return data.carts;
}



// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `
  #graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Product" type defines the queryable fields for every book in our data source.
  type Product {
    id: String
    title: String
    description: String
    category: String
  }

  type Cart {
    id: String
    products: [Product]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "products" query returns an array of zero or more Products (defined above).
  type Query {
    products: [Product]
  }

  type Query{
    carts: [Cart]
    greeting: String
    product(id: ID!): Product
  }
`;


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    products: () => getProducts(),
    carts: () => getCarts(),
    greeting: () => 'Hello World',
    product: (_root: any, { id }: any) => getProductsInfo(id)
  },

};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});


console.log(`🚀  Server ready at: ${url}`);
