// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword users.json -d myDB -c users --jsonArray --drop


// * BASIC UPDATES

// UPDATE 1: OVERWRITE A FIELD (SINGLE DOCUMENT)
// Overwrites the 'hobbies' field with the new value on the first matching document
//db.getCollection("users").updateOne(
//    {_id: ObjectId("6564fb5194199aa0085aa3e1")},
//    { $set: { 
//        hobbies: [
//            {title: "Sports", frequency: 5},
//            {title: "Cooking", frequency: 3},
//            {title: "Hiking", frequency: 1},
//        ]
//      } 
//    }
//)

// UPDATE 2: UPDATE MULTIPLE FIELDS (SINGLE DOCUMENT)
// Update multiple fields
//db.getCollection("users").updateOne(
//    {_id: ObjectId("6564fb5194199aa0085aa3e1")},
//    {$set: {age: 40, phone: '123456'}}
//)

// UPDATE 3: UPDATE MANY 
// Updates any matching document 
//db.getCollection("users").updateMany(
//    {"hobbies.title": "Gaming"},
//    { $set: { isGamer: true } }
//)


// * OPERATORS

// UPDATE 4: INCREMENTING / DECREMENTING VALUES
// Incrementing / Decrementing Values
//db.getCollection("users").updateOne(
//    {name: 'Jane Smith'},
////    {$inc: {age: 2} }                // increment age by 2
////    {$inc: {age: -3} }               // decrement age by 3
//)

// UPDATE 5: $min, $max, and $mul
//db.getCollection("users").updateOne(
//    {name: 'Jane Smith'},
////    {$min: {age: 35} }            // Change if the NEW value is LOWER than exisiting value
////    {$max: {age: 38} }            // Change if the NEW value is HIGHER than exisiting value
////    {$mul: {age: 1.5} }           // Multiple the field by the value sent in
//)

// UPDATE 6: Drop a field
//db.getCollection("users").updateMany(
//    {isGamer: true},
////    {$set: { phone: null }}         // Set to `null`
////    {$unset: { phone: "" }}         // Actually drop the field (NOTE: the value is arbitrary)
//)

// UPDATE 7: Rename a field
//db.getCollection("users").updateMany(
//    {},                                        // match any document
//    {$rename: { age: "newAgeFieldName" }}      // NOTE: if the field does not exist on a document, it just won't be modified
//)

// UPDATE 8: UPSERT
// Update -or- Insert
// db.getCollection("users").updateMany(
//     { name: "Jane Smith" },
//     { $set: { 
//         age: 30,
//         hobbies: [
//             {title: "Food", frequency: 3},
//         ], 
//         isGamer: true
//       }
//     },
//     {upsert: true} 
// )
