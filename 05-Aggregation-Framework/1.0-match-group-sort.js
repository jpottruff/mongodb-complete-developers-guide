// IMPORT `00-Dummy Data/persons.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop


// EXAMPLE: $MATCH, $GROUP, $SORT
db.getCollection("persons").aggregate([
   // $MATCH STAGE
   { $match: {gender: "female"} },
   
   // $GROUP STAGE - will merge documents
   // NOTE: _id is a document in this case; .the $ in $location.state tells mongo its a feild in the document
   // NOTE: we are using a $group stage aggregate function to get the total people ($sum)
   { $group: {_id: {state: "$location.state" }, totalPersons: {$sum: 1} } },
   
   // $SORT STAGE
   // ASC: 1; DESC: -1
   { $sort: { totalPersons: -1 } }
]);