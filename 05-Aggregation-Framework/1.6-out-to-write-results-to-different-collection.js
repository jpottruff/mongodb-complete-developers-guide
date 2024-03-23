// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// EXAMPLE 1 (NOTE: you would probably process the data a lot more)
db.getCollection("persons").aggregate([
//  TRANSFORM DATA
    { $project: {name: { $concat: ["$name.first", " ", "$name.last"] }, birthdate: {$toDate: "$dob.date" } } },       
// WRITE ELSEWHERE   
    { $out: "transformedPersons" }
]);