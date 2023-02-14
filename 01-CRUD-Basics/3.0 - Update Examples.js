// UPDATE BY OBJECT ID (appends field) (make sure the id actually exists)
//db.getCollection("flightData").update({_id: ObjectId("63eae1449cea65349023734f")}, {$set: {delayed: true}});
//db.getCollection("flightData").updateOne({_id: ObjectId("63eae1449cea65349023734f")}, {$set: {delayed: true}});

// REPLACE THE OBJECT ENTIRELY 
//db.getCollection("flightData").update({_id: ObjectId("63eae1449cea65349023734f")}, {delayed: true});
//db.getCollection("flightData").replaceOne({_id: ObjectId("63eae1449cea65349023734f")}, {delayed: true});


db.getCollection("flightData").find()