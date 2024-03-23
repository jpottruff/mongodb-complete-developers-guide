// IMPORT `00-Dummy Data/users.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// NOTE: run all commands before executing the example

// COMMAND 1 - create transformed persons collection w/ tranformed data
//db.persons.aggregate([
//    {
//      $project: {
//        _id: 0,
//        name: 1,
//        email: 1,
//        birthdate: { $toDate: '$dob.date' },
//        age: "$dob.age",
//        location: {
//          type: 'Point',
//          coordinates: [
//            {
//              $convert: {
//                input: '$location.coordinates.longitude',
//                to: 'double',
//                onError: 0.0,
//                onNull: 0.0
//              }
//            },
//            {
//              $convert: {
//                input: '$location.coordinates.latitude',
//                to: 'double',
//                onError: 0.0,
//                onNull: 0.0
//              }
//            }
//          ]
//        }
//      }
//    },
//    {
//      $project: {
//        gender: 1,
//        email: 1,
//        location: 1,
//        birthdate: 1,
//        age: 1,
//        fullName: {
//          $concat: [
//            { $toUpper: { $substrCP: ['$name.first', 0, 1] } },
//            {
//              $substrCP: [
//                '$name.first',
//                1,
//                { $subtract: [{ $strLenCP: '$name.first' }, 1] }
//              ]
//            },
//            ' ',
//            { $toUpper: { $substrCP: ['$name.last', 0, 1] } },
//            {
//              $substrCP: [
//                '$name.last',
//                1,
//                { $subtract: [{ $strLenCP: '$name.last' }, 1] }
//              ]
//            }
//          ]
//        }
//      }
//    },
//    { $out: "transformedPersons" }
//])

// COMMAND 2 - Create Index
//db.transformedPersons.createIndex(
//    { location: "2dsphere" }
//)

// EXAMPLE - using geoNear to find persons over thirty within an area
db.transformedPersons.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [-18.4, -42.8]                 // based on something in the collection
        },
        maxDistance: 1000000,                         // in m
//        num: 10,                                    // DEPRECATED    
        query: { age: { $gt: 30 } },                  // filter the collection for whatever you want
        distanceField: "distance"                     // where mongo should store
      }
    }, 
    // replace `num`
    { $limit: 10}
])
