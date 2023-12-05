// IMPORT `00-Dummy Data/persons.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// * BASIC FLOW
// STEP 1: USE EXPLAIN TO GET STATUS 
// db.getCollection("persons")
// //.explain()                            // NOTE: winningPlan `'COLLSCAN'`
// //.explain('executionStats')            // NOTE: prior to indexing, `"executionTimeMillis" : 4.0,`
// .find({
//     "dob.age": {$gt: 60}
// })


// STEP 2: CREATE THE INDEX
//db.getCollection("persons").createIndex({
//    "dob.age": 1                            // create ASC (1) \ DESC (-1)
//})

// STEP 3: USE EXPLAIN TO GET STATUS AGAIN
// db.getCollection("persons")
// // .explain()                            // NOTE: winningPlan now doing `'IXSCAN' 
// //.explain('executionStats')             // NOTE: reduced by 2ms `"executionTimeMillis" : 2.0,`
// .find({
//     "dob.age": {$gt: 60}
// })


// * ADDITIONAL COMMANDS

// EXAMPLE: DROP INDEX
// db.getCollection("persons").dropIndex({
//     "dob.age": 1                            // create ASC (1) \ DESC (-1)
// })

// EXAMPLE: CREATE UNIQUE INDEX
// db.getCollection("persons").createIndex({         
//     email: 1              
// }, {
//     unique: true
// })

// EXAMPLE: CREATE COMPOUND INDEX
// db.getCollection("persons").createIndex({
//     "dob.age": 1,                            
//     gender: 1                            
// })

// EXAMPLE: LIST INDEXES
// db.getCollection("persons").getIndexes()