// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword users.json -d myDB -c users --jsonArray --drop

// EXAMPLE 1: basic $group to create an array of arrays
//db.getCollection("users").aggregate([
// { $group: {
//     _id: 
//         { age: "$age"},
//         allHobbies: { $push: "$nicknames" }    // NOTE: this will be an array of arrays
//     }
// }
//])

// EXAMPLE 2: $unwind to create a single array (duplicate and non-duplicate values)
//db.getCollection("users").aggregate([
// { $unwind: "$nicknames" },                    // creates a document for each value in the array (eg. someone with 3 nicknames will have 3 separate docs
// { $group: {
//     _id: 
//         { age: "$age"},
////         allHobbies: { $push: "$nicknames" }     // NOTE: this will be a single array (but may contain duplicates)
//         allHobbies: { $addToSet: "$nicknames" }     // NOTE: this will be a single array (no duplicates)
//     }
// }
//])

// EXAMPLE 3: $slice to get certain elements of an array
//db.getCollection("users").aggregate([
//    { $project: {
//        _id: 0, 
////        hobby: { $slice: ["$hobbies", 1] }      // only want the first hobby
////        hobby: { $slice: ["$hobbies", -2] }     // only want the last 2
//        hobby: { $slice: ["$hobbies", 2, 1] }   // start a position 2, take 1
//      } 
//    }
//])

// EXAMPLE 4: $size to get length of an array 
// db.getCollection("users").aggregate([
//     { $project: {
//         _id: 0, 
//         name: 1,
//         numHobbies: { $size: "$hobbies"}   // start a position 2, take 1
//       } 
//     }
// ])

// EXAMPLE 5: $filter to filter array results
//db.getCollection("users").aggregate([ 
//    { $project: {
//        _id: 0,
//        name: 1,
//        frequencies: {
//            $filter: { 
//                input: "$hobbies",
//                as: "hobby",
//                cond: { $gt: ["$$hobby.frequency", 5] }     // hobbies with a frequency greater than 5
//                 
//            }
//        } 
//      }
//    }
//])

// EXAMPLE 6 - find the highest hobby frequency for each person and sort descending 
//db.getCollection("users").aggregate([ 
//// STAGE 1 - create many new documents - each with 1 hobby
//    { $unwind: "$hobbies" },
//    
//// STAGE 2 - sort all documents by hobby frequency
////  option 1
////  { $sort: { "hobbies.frequency": -1} }
////  option 2
//    { $project: { _id: 1, name: 1, age: 1, frequency: "$hobbies.frequency"} },
//    { $sort: { frequency: -1} },
//    
//// STAGE 3 - group by id (or name if unique)
//    { $group: { _id: "$_id", name: { $first: "$name"}, highestFrequency: { $max: "$frequency"} } },
//    
//// STAGE 4 - sort by frequency
//    { $sort: { highestFrequency: -1 } }
//])

