// NOTE: Run the script in `00-Dummy Data/Insert Passenger Data Script.js` to populate the data

// READ CURSOR 1: BASIC 
// Find gives you back a CURSOR Object (and will NOT give you all of the documents by default in large collections)
//db.getCollection("passengers").find({})
//db.getCollection("passengers").find()

// READ CURSOR GENERAL EXAMPLES:
//db.getCollection("passengers").find().count();                                  // count
//db.getCollection("passengers").find({}, {name: 1})                              // project
//db.getCollection("passengers").find().sort({name: 1})                           // sort
//db.getCollection("passengers").find().sort({name: 1}).skip(15).limit(10);       // pagination

// READ CURSOR EXTENDED EXAMPLES
// NOTE: These make more sense when interacting via the shell or drivers
//db.getCollection("passengers").find().next();                                   // also note hasNext()
//db.getCollection("passengers").find().toArray()
//db.getCollection("passengers").find().forEach((person) => printjson(person)) 