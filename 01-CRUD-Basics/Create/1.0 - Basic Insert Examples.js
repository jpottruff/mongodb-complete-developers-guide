// INSERT 1: INSERT ONE
db.getCollection("flightData").insertOne({
   departureAirport: "YYZ",
   arrivalAirport: "TXL"
})

// INSERT 2: INSERT MANY  
//db.getCollection("flightData").insertMany([
// { departureAirport: "SFO", arrivalAirport: "TXL"},
// { departureAirport: "LHR", arrivalAirport: "YYZ"}
//])

// (OPTIONAL) READ ALL / CLEAN UP
//db.getCollection("flightData").find()
//db.getCollection("flightData").remove({})