// use demo; 

// PRE-DEFINED ID
//db.getCollection("hobbies").insertMany([
//    {_id: "COOKING", name: "Cooking"},
//    {_id: "CARS", name: "Cars"},
//    {_id: "SPORTS", name: "Sports"},
//]);

// ORDERED INSERT
// This will insert the FIRST document, but STOP at the duplicate (eg. not rollback)
//db.getCollection("hobbies").insertMany([
//    {_id: "YOGA", name: "Yoga"},
//    {_id: "CARS", name: "Cars"},
//    {_id: "HIKING", name: "Hiking"},
//]);

// NOT ORDERED INSERT
// Still thorws error for the problematic entries but continues down the list
//db.getCollection("hobbies").insertMany([
//    {_id: "YOGA", name: "Yoga"},
//    {_id: "CARS", name: "Cars"},
//    {_id: "HIKING", name: "Hiking"},
//], {ordered: false});