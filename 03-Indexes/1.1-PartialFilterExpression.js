// IMPORT `00-Dummy Data/persons.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop


// EXAMPLE: PARTIAL FILTER EXPRESSION
// useful for when you perform a certain filter regularly
//db.getCollection("persons").createIndex({ 
//     'dob.age': 1
//},{
//     partialFilterExpression: {'gender': 'male' }                                      // aply the index to only those that are male  
//                                                                                       // NOTE: could also use the same property / subset:    partialFilterExpression: {'dob.age': {$gt: 60} },   
//})

//db.getCollection("persons").explain().find({'dob.age': {$gt: 60} })                    //     queryPlanner.winningPlan.stage: 'COLLSCAN' - because gender male was not included as a filter
//db.getCollection("persons").explain().find({'dob.age': {$gt: 60}, gender: 'male' })    //     queryPlanner.winningPlan.stage: 'IXSCAN' - because gender male was included as a filter


// EXAMPLE: PARTIAL FILTERS FOR OPTIONAL FIELD INDEX
// Scenario - if you want to index a unique field that may not exist on all documents.
// Duplicate indexes of `null` value will cause an error on unique indexes - partialFilterExpression can avoid this

//db.getCollection("persons").createIndex({ email: 1}, {unique: true});                                                              // WILL cause error if more than one person with no email defined is inserted
//db.getCollection("persons").createIndex({ email: 1}, {unique: true, partialFilterExpression: { email: {$exists: true } } });        // WILL NOT cause error if more than one person with no email defined is inserted
