// IMPORT `00-Dummy Data/tv-shows.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword tv-shows.json -d myDB -c shows --jsonArray --drop

db.getCollection("shows").find({
    // COMPARISON OPERATORS
    //    runtime: {$eq: 60}              // equal to
    //    runtime: {$ne: 60}              // not equal to
    //    runtime: {$lt: 60}              // lower than
    //    runtime: {$gt: 60}              // greater than
    //    runtime: {$in: [30, 42]}        // matching multiple criteria
    
    // MORE COMPLEX COMPARISON SEARCHES
    //    "rating.average": {$gt: 7}   // searching embedded fields
    //    genres: "Drama"              // searching within an array field (contains 'Drama' in the array)
    //    genres: ["Drama"]            // searching within an array field (contains ONLY 'Drama' in the array)



    // LOGICAL OPERATORS
    //    $or: [{"rating.average":{$lt: 5}}, {"rating.average":{$gt: 9.3}}]        // matches an array of conditions 
    //    $nor: [{"rating.average":{$lt: 5}}, {"rating.average":{$gt: 9.3}}]       // matches an array of conditions (inverse)            
    //    $and: [{"rating.average": {$gt: 9}}, {genres: "Drama"}]                  // matches multiple conditions (old way)
    //    "rating.average": {$gt: 9}, genres: "Drama"                              // same as above but more concise
    //    $and: [{genres: "Drama"}, {genres: "Horror"}]                            // matches both conditions (eg. not either or)
    //    runtime: {$not: {$eq: 60}}                                               // $not is available but can usually just use $ne or $nor  

    // ELEMENT OPERATORS
    //    url: {$exists: true}                // finds all documents where the field exists
    //    url: {$exists: true, $ne: null}     // finds all documents where the field exists and is not null
    //    runtime: {$type: "number"}          // finds all docs where the field is the given type - see https://www.mongodb.com/docs/manual/reference/bson-types/

    // EVALUATION OPERATORS
    //    summary: {$regex: /musical/}            // doesn't search for full equality (but not very performant)

    // (NOTE: the 2 examples will not work on the shows db)
    //    $expr: {$gt: ["$volume", "$target"] }   // matches all documents where the 'volume' field is greater than the 'target' field 

    // Matches all documents where the 'volume' field is greater than the 'target' field - but if the volume is greater than 90, the difference must be at least 10
    //    $expr: {
    //        $gt: [{
    //            $cond: { 
    //                $if: {$gt: ["$volume", 190]},
    //                then: {$subtract: ["$volume", 10 ]},
    //                else: "$volume"
    //            
    //            }
    //        },
    //        "$target"
    //        ]
    //    }   
})
