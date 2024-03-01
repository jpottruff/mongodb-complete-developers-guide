// IMPORT `00-Dummy Data/persons.json` - you will likely need mongotools installed
// If you have mongo-tools - use the script below replacing `myUser`, `myPassword`, `myDB` as needed
// mongoimport --authenticationDatabase admin --username myUser --password myPassword persons.json -d myDB -c persons --jsonArray --drop

// EXAMPLE: $PROJECT
db.getCollection("persons").aggregate([
    // Simple Project
//    { $project: { _id: 0, gender: 1, fullName: {$concat: ["$name.first", " ", "$name.last"] } } }

    // More Complex Example    
    { 
        $project: { 
            _id: 0, 
            gender: 1, 
            fullName: {
                // CAPTIALIZE ONLY FIRST LETTER 
                $concat: [
                    { $toUpper: { $substrCP: ["$name.first", 0, 1] } }, 
                    { 
                      $substrCP: [
                          "$name.first", 
                          1, 
                          { $subtract: [ {$strLenCP: "$name.first" }, 1 ] } 
                      ] 
                    },
                    " ", 
                    { $toUpper: "$name.last" } 
                ] 
            } 
        } 
    }
])