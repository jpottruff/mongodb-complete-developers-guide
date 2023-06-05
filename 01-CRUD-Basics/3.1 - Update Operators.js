// Overwrites the 'hobbies' field with the new value on the first matching document
//db.getCollection("users").updateOne(
//    {_id: ObjectId('647e3cbabfccf345c27a8634')},
//    { $set: { 
//        hobbies: [
//            {title: "Sports", frequency: 5},
//            {title: "Cooking", frequency: 3},
//            {title: "Hiking", frequency: 1},
//        ]
//      } 
//    }
//)

// Update multiple fields
//db.getCollection("users").updateOne(
//    {_id: ObjectId('647e3cbabfccf345c27a8634')},
//    {$set: {age: 40, phone: '123456'}}
//)

// Updates any matching document 
//db.getCollection("users").updateMany(
//    {"hobbies.title": "Sports"},
//    { $set: { isSporty: true } }
//)

// Incrementing / Decrementing Values
//db.getCollection("users").updateOne(
//    {name: 'Manuel'},
//    {$inc: {age: 2} }
////    {$inc: {age: -3} }
//)

// $min, $max, and $mul
//db.getCollection("users").updateOne(
//    {name: 'Chris'},
////    {$min: {age: 35} }            // Change if the NEW value is LOWER than exisiting value
////    {$max: {age: 38} }            // Change if the NEW value is HIGHER than exisiting value
////    {$mul: {age: 1.5} }           // Multiple the field by the value sent in
//)

// Drop a field
//db.getCollection("users").updateMany(
//    {isSporty: true},
////    {$set: { phone: null }}         // Set to `null`
////    {$unset: { phone: "" }}         // Actually drop the field (NOTE: the value is arbitrary)
//)

// Rename a field
//db.getCollection("users").updateMany(
//    {},
//    {$rename: { age: "newAgeFieldName" }}      // NOTE: if the field does not exist on a document, it just won't be modified
//)

// UPSERT (UPDATE -or- INSERT)
//db.getCollection("users").updateMany(
//    { name: "Maria" },
//    { $set: { 
//        age: 30,
//        hobbies: [
//            {title: "Food", frequency: 3},
//        ], 
//        isSporty: true
//      }
//    },
//    {upsert: true} 
//)