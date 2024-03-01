// IMPORT `00-Dummy Data/persons.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// EXAMPLE 1: Basic Convert
// db.getCollection("persons").aggregate([
//     { 
//         $project: {
//             _id: 0,
//             name: 1, 
//             age: "$dob.age",
//             birthdate: { 
//                 $convert: {
//                     input: "$dob.date",
//                     to: "date"
//                 } 
//             }
//             // NOTE: this will work too if you don't specify onError/onNull - see similar shortcuts in docs
//             // birthdate: {$toDate: "$dob.date"}
//         }
//     },
// ]);

// EXAMPLE 2: GeoJSON
db.getCollection("persons").aggregate([
    { 
        $project: {
            _id: 0,
            name: 1,
            email: 1,
            // transforming into GeoJSON data
            location: {
                type: "Point",
                coordinates: [
                    // convert to number
                    { 
                        $convert: {
                            input: "$location.coordinates.longitude", 
                            to: "double", 
                            onError: 0.0, 
                            onNull: 0.0 
                        },
                    },
                    // NOTE: you would obviously want to convert this too, just leaving in to illustrate difference
                    "$location.coordinates.latitude"
                ]
            }
        } 
    }
])