// NOTE: Run the script in `00-Dummy Data/Insert Flight Data.js` to populate the data

// UPDATE 1: UPDATE/MODIFY BY OBJECT ID
// NOTE: modify the id to whatever is in your DB
//db.getCollection("flightData").update({_id: ObjectId("65553085ec2169f24c8bc0e8")}, {$set: {delayed: true}});          // appends a field if not present
//db.getCollection("flightData").updateOne({_id: ObjectId("65553085ec2169f24c8bc0e8")}, {$set: {delayed: false}});      // appends field if not present

//db.getCollection("flightData").update({departureAirport: 'ATL'}, {$set: {delayed: true}});                            // NOTE: would only update the first matching one


// UDPATE 2: REPLACE THE OBJECT ENTIRELY 
//db.getCollection("flightData").replaceOne({_id: ObjectId("65553085ec2169f24c8bc0e8")}, {delayed: true});

// (OPTIONAL) READ ALL / CLEAN UP
//db.getCollection("flightData").find()
//db.getCollection("flightData").remove({})