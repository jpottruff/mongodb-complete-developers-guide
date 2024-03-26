// COMMAND 1 - use a new db
//use mongo-course-db-performance;

// EXAMPLE 1 - capped collection
// NOTE: good for automatic clearing of data
//db.createCollection(
//    'cappedExample',                     // collection name
//    {capped: true, size: 10000, max: 3}  // capped at 10000 bytes / 3 documents
//);

// INSERT SOME DOCS
//db.cappedExample.insertMany([
//    { name: 'anna' },
//    { name: 'tom' },
//    { name: 'john' },
//]);

// FIND EXAMPLES
//db.cappedExample.find();                       // will always be they order they were inserted
//db.cappedExample.find().sort({$natural: -1})     // $natural (eg. 'natural order') specific to this type of collection

// INSERT EXAMPLES
//db.cappedExample.insertOne({name: 'Maria'})        // NOTE: will no throw an error if the collection is at max, but push out a document (eg. the first one inserted)
//db.cappedExample.find();  
