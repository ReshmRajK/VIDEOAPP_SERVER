//import json Server
const jsonserver=require('json-server')

//server creation
const server=jsonserver.create()

//parse json to js-middleware
const middleware=jsonserver.defaults()

//create router
const router=jsonserver.router("db.json")

//set port
const port=process.env.port || 4000

//use middleware in server
server.use(middleware)

//use router in server
server.use(router)

//listen
server.listen(port,()=>{
    console.log(`json server run at port number ${port}`);
})


