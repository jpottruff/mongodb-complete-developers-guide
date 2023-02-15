// MODIFYING AN EXISTING VALIDATOR
//db.runCommand({
//    collMod: "posts",
//    validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: [
//                 "title",
//                 "author",
//                 "content",
//                 "comments"
//             ],
//             properties: {
//                 title: {
//                     bsonType: "string",
//                     description: "Must be a string and is required.",
//                 },
//                 author: {
//                     bsonType: "objectId",
//                     description: "Must be an objectId and is required.",
//                 },
//                 content: {
//                     bsonType: "string",
//                     description: "Must be a string and is required.",
//                 },
//                 comments: {
//                     bsonType: "array",
//                     description: "Must be an array and is required.",
//                     items: {
//                         bsonType: "object",
//                         required: ["author", "text"],
//                         properties: {
//                             author: {
//                                 bsonType: "objectId",
//                                 description: "Must be an objectId and is required"
//                             },
//                             text: {
//                                 bsonType: "string",
//                                 description: "Must be a string and is required"
//                             }
//                         }
//                     }
//                 }
//             }
//         }   
//    },
//    validationAction: "warn"    
//})

// INSERT A INVALID DOCUMENT (NOTE: author)
// validationAction above means this will be written to the system logs (discussed later when configuring server)
//db.getCollection("posts").insertOne({
//    title: "My First Post",
//    author: "NOT AN OBJECT ID",
//    content: "Its awesome",
//    comments: [
//        {
//            author: ObjectId("63ead7c6f58a18f655b38f66"),
//            text: "Good post"
//        }
//    ]
//})