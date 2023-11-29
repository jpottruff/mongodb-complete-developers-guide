// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword users.json -d myDB -c users --jsonArray --drop

db.getCollection("users").find({
    // BASIC ARRAYS
    //    nicknames: {$size: 3}                    // exact matches the size of the array
    //    nicknames: ["Johnny", "friend","guy"]    // matches if the array matches exactly (same items / order)
    //    nicknames: { $all: ["friend", "guy"] }   // matches if the array has - regardless of order

    // COMPLEX ARRAYS
    //    $and: [{"hobbies.title": "Gaming"}, {"hobbies.frequency": {$gte: 3}} ]     // Finds any Document that contains either/or matching document in an array of embedded documents.     This may produce undesired results 
    //    hobbies: {$elemMatch: {title: "Gaming", frequency: {$gte: 3}}  }           // Looks for BOTH conditions in an array of embedded document
    
});
    
    