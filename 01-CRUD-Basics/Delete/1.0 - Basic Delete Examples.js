// NOTE: Run the script in `00-Dummy Data/Insert Flight Data.js` to populate the data

// DELETE 1: DELETE ONE
//db.getCollection("flightData").deleteOne({intercontinental: true})

// DELETE 2: DELETE EVERYTHING
// db.getCollection("flightData").deleteMany({});
// db.getCollection("flightData").drop()

// (OPTIONAL) READ ALL / CLEAN UP
//db.getCollection("flightData").find()
//db.getCollection("flightData").remove({})