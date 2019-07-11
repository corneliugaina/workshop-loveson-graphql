const express = require('express'); // 1.
const graphqlHTTP = require('express-graphql'); 
const schema = require('./schema/schema')
const cors = require('cors')

const app = express(); //

app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(4004, () => { // 3. une fois installé nodemon, va "ecouter les changements" in browser: http://localhost:4000/graphql 
    console.log('now listening for request on port 4004');
}) 