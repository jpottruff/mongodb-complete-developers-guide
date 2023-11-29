// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword users.json -d myDB -c users --jsonArray --drop

// UPDATE 1: $ PLACEHOLDER
// UPDATE A FOUND VALUE IN A COMPLEX / NESTED ARRAY
// db.getCollection("users").updateMany({
//     // * FIND CRITERIA
//     // $and: [{"hobbies.title": "Gaming"}, {"hobbies.frequency": {$gte: 3} }]      // finds any document where BOTH are true (not necessarily the same hobby)
//     hobbies: {$elemMatch: { title: "Gaming", frequency: {$gte: 3} } }              // finds any document where BOTH are true (for the same hobby)  
// }, {
//     $set: {"hobbies.$.highFrequency": true }                                       // add the property to all matching nested documents within the array  
// })

// UPDATE 2: UPDATE ALL ELEMENTS IN AN ARRAY
//db.getCollection("users").updateMany({
//     age: { $gte: 30 }                                    // FIND CRITERIA
//}, {
//    $inc: {"hobbies.$[].frequency": 1}                    // forEach hobby - increment frequency by 1
//})

// UPDATE 3: UPDATE ALL ARRAY ELEMENTS THAT MATCH
//db.getCollection("users").updateMany({
//   "hobbies.frequency": { $gte: 7 }                       // FIND CRITERIA: all people with at least one hobby that has a frequency larger than 7
//}, {
//   $set: {"hobbies.$[el].frequentParticiapnt": true}      // NOTE: `el`
//}, {
//    arrayFilters: [{"el.frequency": { $gte: 7 } }]        // Add filter criteria for the array. Ensure variable names match (eg. `el` - can name whatever you want as long as it matches)
//});

// UPDATE 4: ADDING ELEMENTS TO AN ARRAY
// db.getCollection("users").updateOne({
//     name: "Grace Lee"
// }, {
//     // $push: { hobbies: { title: 'Gaming', frequency: 5} }                                                                                      // Push a single element onto the array
//     // $push: { hobbies: { $each: [ {title: 'Wine', frequency: 3}, {title: 'Climbing', frequency: 5} ] } }                                       // Push multiple elements onto the array
//     // $push: { hobbies: { $each: [ {title: 'Zookeeping', frequency: 1}, {title: 'Apple Picking', frequency: 4} ], $sort: {frequency: -1} } }    // Push multiple elements onto the array and sort by frequency DESC
// });

// UPDATE 5: REMOVE ELEMENTS FROM AN ARRAY
// db.getCollection("users").updateOne({
//     name: "Grace Lee"
// }, {
//     // $pull: { hobbies: { title: 'Gaming', frequency: 5} }                // will remove all matching instances from the array   
//     // $pop: { hobbies: 1 }                                                // remove the LAST element
//     // $pop: { hobbies: -1 }                                               // remove the FIRST element
// });

// UPDATE 6: $addToSet vs. $push
// db.getCollection("users").updateOne({
//     name: "Grace Lee"
// }, {
//    // $push: { hobbies: { title: 'Gaming', frequency: 5} }                      // adds to array
//    // $addToSet: { hobbies: { title: 'Gaming', frequency: 5} }                  // adds unique values only 
// });
