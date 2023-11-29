// NOTE: Run the script in `00-Dummy Data/Insert Flight Data.js` to populate the data

// READ 1: ALL RECORDS
//db.getCollection("flightData").find({})

// READ 2: SIMPLE CONDITION
//db.getCollection("flightData").find({intercontinental: true})

// READ 3: WITH OPERATORS
//db.getCollection("flightData").find({distance: {$gt: 10000}})
//db.getCollection("flightData").find({distance: {$lt: 10000}})

// READ 4: ALL MATCHING VS. FIRST MATCHING RESULT
//db.getCollection("flightData").find({distance: {$gt: 100}})
//db.getCollection("flightData").findOne({distance: {$gt: 100}})

// (OPTIONAL) CLEAN UP
//db.getCollection("flightData").remove({})