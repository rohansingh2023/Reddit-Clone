import { ApolloClient, InMemoryCache } from '@apollo/client'

// const APIkey = process.env.STEPZEN_SECRET_API
const APIkey =
  'boshan::stepzen.net+1000::d88dc51e6277ce9a6158e665c9b6e8d47ac84216363feba6409888f652161e96'

const client = new ApolloClient({
  uri: 'https://boshan.stepzen.net/api/honking-lobster/__graphql',
  headers: {
    Authorization: `apikey ${APIkey}`,
  },
  // uri: 'http://localhost:5001/api/honking-lobster',

  cache: new InMemoryCache(),
})

export default client
