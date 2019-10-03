const express = require('express')
const graphqlHTTP =  require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3333)
console.log('listening on port 3333')
