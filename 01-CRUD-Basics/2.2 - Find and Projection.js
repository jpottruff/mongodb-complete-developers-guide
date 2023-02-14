// PROJECTION
db.getCollection("passengers").find({})
db.getCollection("passengers").find({}, {name: 1, _id: 0})