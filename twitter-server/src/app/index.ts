import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser'

export async function initServer() {
    const app = express()
    app.use(bodyParser.json())

    const graphqlServer = new ApolloServer({
        typeDefs: `
          type Query {
            sayHello: String,
            sayHelloToMe(name: String!): String!
          }
        `,
        resolvers: {
          Query: {
            sayHello: () => 'Hello boi',
            sayHelloToMe: (parent: any, {name}: {name: string}) => `Hii ${name}`
          }
        }
    })
    await graphqlServer.start()

    app.use('/graphql', expressMiddleware(graphqlServer))
    
    return app
}