// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// EXAMPLE 1: limit to see only a set number of results
//db.getCollection("persons").aggregate([
//    { $project: {_id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: {$toDate: "$dob.date" } } },
//    { $sort: {birthdate: 1} },
//    { $limit: 10 }                // see the top 10
//]);

// EXAMPLE 2: limit and skip to see the next bunch of results (eg. basic pagination)
//db.getCollection("persons").aggregate([
////  SETUP DATA
//    { $project: {_id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: {$toDate: "$dob.date" } } },
//    { $sort: {birthdate: 1} },
////  PAGINATION
//    { $skip: 10 },             // skip 10 
//    { $limit: 10 },            // see the next 10 after whatever you skipped
////    { $skip: 10 }            // NOTE: if you put skip here instead of before limit you would get nothing 
//]);

// EXAMPLE 3 - Simple Pagination (same as 2 without the comments)
//db.getCollection("persons").aggregate([
////  SETUP DATA
//    { $project: {_id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: {$toDate: "$dob.date" } } },
//    { $sort: {birthdate: 1} },
////  PAGINATION
//    { $skip: 10 },             
//    { $limit: 10 },            
//]);

// EXAMPLE 4 - Pagination w/ $facet to get a total as well
// https://stackoverflow.com/questions/20348093/mongodb-aggregation-how-to-get-total-records-count/49483919#49483919
//db.getCollection("persons").aggregate([
////  SETUP DATA
//    { $project: {_id: 0, name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: {$toDate: "$dob.date" } } },
//    { $sort: {birthdate: 1} },
//// FACET (multipipline stage)
//    { $facet: {
//          // PAGINATION
//          paginatedResults: [{$skip: 10}, {$limit: 10}],
//          // TOTAL
////          totalCountArr: [ {$count: "matchingDocs"} ]      // see commentted line in addFields
//          totalCount: [ {$count: "matchingDocs"} ]  
//      }
//    },
//// ADD FEILD FOR TOTAL (try commenting this out to see why)
//// https://stackoverflow.com/questions/51718370/mongodb-to-return-object-from-facet  
////    { $addFields: { "totalCount": {$arrayElemAt: ["$totalCountArr.matchingDocs", 0] } } }    
//    { $addFields: { "totalCount": {$arrayElemAt: ["$totalCount.matchingDocs", 0] } } }    
//]);

