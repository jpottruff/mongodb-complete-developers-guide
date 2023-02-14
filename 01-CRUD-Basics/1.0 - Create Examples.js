// INSERT ONE
//db.getCollection("flightData").insertOne({
//    departureAirport: "YYZ",
//    arrivalAirport: "TXL"
//})

// INSERT MANY  
//db.getCollection("flightData").insertMany([
// { departureAirport: "SFO", arrivalAirport: "TXL"},
// { departureAirport: "LHR", arrivalAirport: "YYZ"}
//])

db.getCollection("flightData").find()