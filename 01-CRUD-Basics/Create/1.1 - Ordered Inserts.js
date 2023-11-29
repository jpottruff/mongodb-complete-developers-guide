// (OPTIONAL) Specify the DB
// use <database-name>;

// INSERT 1: PRE-DEFINED ID
db.getCollection("hobbies").insertMany([
   {_id: "COOKING", name: "Cooking"},
   {_id: "CARS", name: "Cars"},
   {_id: "SPORTS", name: "Sports"},
]);

// INSERT 2: ORDERED INSERT
// This will insert the FIRST document, but STOP at the duplicate (eg. not rollback)
// NOTE: see above script for duplicate `_id`
// db.getCollection("hobbies").insertMany([
//    {_id: "YOGA", name: "Yoga"},
//    {_id: "CARS", name: "Cars"},
//    {_id: "HIKING", name: "Hiking"},
// ]);

// INSERT 3: NOT ORDERED INSERT
// Still thorws error for the problematic entries but continues down the list due to the {ordered: false} flag
// NOTE: again, see above script for duplicate `_id`
// db.getCollection("hobbies").insertMany([
//    {_id: "YOGA", name: "Yoga"},
//    {_id: "CARS", name: "Cars"},
//    {_id: "HIKING", name: "Hiking"},
// ], {ordered: false});

// (OPTIONAL) CLEAN UP
// db.getCollection("hobbies").remove({})