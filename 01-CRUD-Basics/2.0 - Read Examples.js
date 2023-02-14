// SIMPLE CONDITION
//db.getCollection("flightData").find({intercontinental: true})

// WITH OPERATORS
//db.getCollection("flightData").find({distance: {$gt: 10000}})
//db.getCollection("flightData").find({distance: {$lt: 10000}})

// ALL MATCHING VS. FIRST MATCHING RESULT
//db.getCollection("flightData").find({distance: {$gt: 100}})
//db.getCollection("flightData").findOne({distance: {$gt: 100}})
