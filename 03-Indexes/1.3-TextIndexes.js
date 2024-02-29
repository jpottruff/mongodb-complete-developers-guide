// TEXT INDEX 
// Alternate to regex searches - more performant

// SETUP
// Initial DB Setup
// db.createCollection('products');

// Insert some docs
// db.getCollection("products").insertMany([
//     {title: 'A Book', description: "This is an awesome book about a young artist"},
//     {title: 'Red T-shirt', description: "This t-shirt is red and it's pretty awesome"},
// ]);


// EXAMPLE 1 - BASIC TEXT INDEX
// CREATE INDEX
//// db.getCollection('products').createIndex({description: 1})               // This does NOT create a text index - it would index ALL the field's content 
//db.getCollection('products').createIndex({description: "text"})             // This does create a text index - it would index ALL the field's content      


// FIND DOCUMENTS
// NOTE: only 1 text index per collection allowed - so don't need to specificy which field
//db.getCollection('products').find({$text: {$search: 'awesome'}});             // Will find both
//db.getCollection('products').find({$text: {$search: 'book'}});                // Will find 1
//db.getCollection('products').find({$text: {$search: 'red book'}});            // Will find both again (eg. either or match)
//db.getCollection('products').find({$text: {$search: '"red book"'}});          // Will find none (eg. no exact match)