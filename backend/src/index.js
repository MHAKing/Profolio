const express=require('express')
const app=express()
const {graphqlHTTP}=require("express-graphql")
PORT=4000
const schema=require("./component/schema.js")
require("./component/db")

app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,console.log("Success"))