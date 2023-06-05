//db.getCollection("shows").find({})

// Find gives you back a CURSOR Object (and will NOT give you all of the documents by default in large collections)
//db.getCollection("shows").find()

// These make more sense when interacting via the shell or drivers
//db.getCollection("shows").find().count();
//db.getCollection("shows").find({}, {name: 1, genres: 1, rating: 1})        // project
//db.getCollection("shows").find().sort({name: 1})                           // sort
//db.getCollection("shows").find().sort({name: 1}).skip(15).limit(10);       // pagination
//db.getCollection("shows").find().next();                                   // also note hasNext()
//db.getCollection("shows").find().toArray()
//db.getCollection("shows").find().forEach((show) => printjson(show)) 