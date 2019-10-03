const express = require('express')
const graphqlHTTP =  require('express-graphql')
const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3333)
console.log('listening on port 3333')
