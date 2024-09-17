import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser'
import cors from 'cors'
import {User} from './user'
import {Tweet} from './tweet'
import { GraphqlContext } from '../interfaces';
import JWTService from '../services/jwt';

export async function initServer() {
    const app = express()
    app.use(bodyParser.json())
    app.use(cors())

    const graphqlServer = new ApolloServer<GraphqlContext>({
        typeDefs: `#graphql
          ${User.types}
          ${Tweet.types}

          type Query {
            ${User.queries}
            ${Tweet.queries}
          }
          type Mutation {
            ${Tweet.mutations}
          }

        `,
        resolvers: {
          Query: {
            ...User.resolvers.queries,
            ...Tweet.resolvers.queries
          },
          Mutation: {
            ...Tweet.resolvers.mutations
          },
          ...Tweet.resolvers.extraResolvers,
          ...User.resolvers.extraResolvers,
        }
    })
    await graphqlServer.start()

    app.use('/graphql', expressMiddleware(graphqlServer, {
      context: async ({req,res}) => {
        let user = undefined; // Adjust `User` type to match your decoded JWT structure

        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split('Bearer ')[1];
            try {
                user = JWTService.decodeToken(token);
            } catch (error) {
                console.error('Error decoding token:', error);
                user = undefined;
            }
        }
        return {
            user,
        };
      }
    }))
    
    return app
}