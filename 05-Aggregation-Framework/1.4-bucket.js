// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop


// NOTE: Bucketing is helpful to get an idea of the data you are working with

// EXAMPLE 1 - BUCKETING TO CREATE STATS
//db.getCollection("persons").aggregate([
//    { $bucket: { 
//        groupBy: "$dob.age",                         // tells mongo what data we want to look at
//        boundaries: [0, 18, 30, 50, 80, 120],        // NOTE: a bucket will not be made if there are no matches
//        output: { 
//            newPersons: { $sum: 1 },                 // one added for every person in the bucket
//            averageAge: { $avg: "$dob.age" },        // averageout the ages in the bucket
////            names: { $push: "$name.first" }        // (optional) list the names in the bucket
//        }
//      }
//    }
//])

// EXAMPLE 2 - AUTO BUCKETING (NOTE: the _id field in the output gives you the bounds)
//db.getCollection("persons").aggregate([
//    { $bucketAuto: { 
//        groupBy: "$dob.age",
//        buckets: 5,
//        output: { 
//            newPersons: { $sum: 1 },                 // one added for every person in the bucket
//            averageAge: { $avg: "$dob.age" },        // averageout the ages in the bucket
//
//        }
//      }
//    }
//])