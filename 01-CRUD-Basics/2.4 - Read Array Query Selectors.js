//db.getCollection("users").insertMany([
//    {name: 'Chris', hobbies: ['Sports', 'Cooking', 'Hiking']},
//    {name: 'Anna', hobbies: ['Sports', 'Cars']},
//    {name: 'Ash', hobbies: ['Cars', 'Sports', 'Food']},
//    {name: 'Steph', hobbies: ['Movies', 'Music', 'Sports', 'Math']}
//]);

db.getCollection("users").find({
//    hobbies: {$size: 4}                    // exact matches the size of the array
//    hobbies: ["Sports", "Cars"]            // matches if the array contains in the exact order
//    hobbies: { $all: ["Sports", "Cars"] }    // matches if the array has - regardless of order
});

db.getCollection("users").find({
//    { $and: [{"hobbies.title": "Sports"}, {"hobbies.frequency": {$gte: 3}} ]}    // Finds any Document that contains either/or matching document in an array of embedded documents.     This may produce undesired results 
//    { hobbies: {$elemMatch: {title: "Sports", frequency: {$gte: 3}}  }}          // Looks for BOTH conditions in an array of embedded document
});

