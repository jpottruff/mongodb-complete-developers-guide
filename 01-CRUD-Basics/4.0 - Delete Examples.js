// DELETE ONE
db.getCollection("flightData").deleteOne({intercontinental: true})

// DELETE EVERYTHING
db.getCollection("flightData").deleteMany({});



