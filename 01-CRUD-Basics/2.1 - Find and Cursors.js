// Find gives you back a CURSOR Object (and will NOT give you all of the documents by default in large collections)
db.getCollection("passengers").find()

// These make more sense when interacting via the shell or drivers
//db.getCollection("passengers").find().toArray()
//db.getCollection("passengers").find().forEach((passenger) => printjson(passenger)) 
