import {GraphQLClient} from 'graphql-request'

const isClient = typeof window !== "undefined" // to check if it is server rendered page or client

// used to make query request
export const graphqlClient = new GraphQLClient('http://localhost:8000/graphql', {
    headers: () => ({
        Authorization: isClient ? `Bearer ${window.localStorage.getItem('__twitter_token')}` : 'undefined'
    })
    // send token only if it is client page
})
