// GeoSpatial Data 
// NOTE: GeoJSON is a standard maintained outside of mongodb
// Mongo supports many of the relevant features of it but not all

// INITIAL SETUP
// Initial DB Setup
// db.createCollection('places');

// Insert some docs
// NOTE: coordinates of Saint Vitus on google maps (40.73701282964932, -73.95516864768516)
//db.getCollection("places").insertMany([
//     // IMPORTANT REQUIRED FIELDS: { type: <GeoJSON object type> ,coordinates: [LONG, LAT]}
//     {name: "Saint Vitus Bar", location: {type: "Point", coordinates: [-73.95524374953204, 40.73693153582368]} },
//     {name: "Manhattan Av/Eagle St Bus", location: {type: "Point", coordinates: [-73.95506135933248, 40.73558204380641] } },
//     {name: "Le Fanfare", location: {type: "Point", coordinates: [-73.95555488575481, 40.73640312353558 ] } },
//     {name: "Greenpoint Manufacturing and DSN", location: {type: "Point", coordinates: [-73.95554415691953, 40.738882560221015] } },
//     {name: "Milk and Roses", location: {type: "Point", coordinates: [-73.95507208816775, 40.73762253017515 ] } },
//]);

// CREATE A GEOSPATIAL INDEX
//db.getCollection('places').createIndex({location: "2dsphere"})

// GEO QUERIES
// NOTE:: these will FAIL if there is no geospatial index
// $NEAR
//db.getCollection("places").find({
//    location: {
//        $near: {
//            // NOTE: coordinates of a place up the street on google maps (40.73763878877935, -73.95519010535568)
//            $geometry: {type: "Point", coordinates: [ -73.95507208816775, 40.737655047379576]},   // GeoJSON object
//            $maxDistance: 150,                                                                    // optional, but you would likely want
//            $minDistance: 30,                                                                     // optional, but you would likely want
//        } 
//    }    
//})

//$GEOWITHIN (eg. find points within an area)
// NOTE: points represent ~2 block square around st. vitus 
//db.getCollection("places").find({
//    location: {
//        $geoWithin: {
//            $geometry: {
//                type: "Polygon", 
//                coordinates: [ 
//                    [
//                        [-73.95535103788471, 40.737907055174894], // p1
//                        [-73.95524374953204, 40.73664700665162],  // p2
//                        [-73.95315162665477, 40.73686650069163],  // p3
//                        [-73.95337693219541, 40.73814280353851],  // p4
//                        [-73.95535103788471, 40.737907055174894], // p1 again (completes the shape)
//                    ]
//                ]
//            }   // GeoJSON object
//        } 
//    }    
//})



// $GEOINTERSECTS (reverse of above - find if a user is inside an area)
// ADDITIONAL SETUP
//db.createCollection('areas');

// Insert some docs
//db.getCollection("areas").insertMany([ 
//    {
//        name: '2 block area',
//        area: {
//            type: "Polygon", 
//            coordinates: [ 
//                [
//                    [-73.95535103788471, 40.737907055174894], // p1
//                    [-73.95524374953204, 40.73664700665162],  // p2
//                    [-73.95315162665477, 40.73686650069163],  // p3
//                    [-73.95337693219541, 40.73814280353851],  // p4
//                    [-73.95535103788471, 40.737907055174894], // p1 again (completes the shape)
//                ]
//            ]
//        }   // GeoJSON object
//    }
//])

// CREATE A GEOSPATIAL INDEX
//db.getCollection('areas').createIndex({location: "2dsphere"})

// QUERY
//db.getCollection("areas").find({
//    area: {
//        $geoIntersects: {
//            $geometry: {
//                type: "Point",
//                coordinates: [-73.95403139114676, 40.73724045183264]
//            }
//        }
//    }
//})


// (find places within a radius)
//db.getCollection("places").find({
//    location: {
//        $geoWithin: {
//            $centerSphere: [
//                [-73.95379535677085, 40.737029088402515 ], // user position
//                0.25 / 6378.1   // 0.25km radius https://www.mongodb.com/docs/manual/core/indexes/index-types/geospatial/2d/calculate-distances/#convert-kilometers-to-radians
//            ]
//        }
//    }
//})