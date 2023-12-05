// EXAMPLE: TIME TO LIVE INDEX (TTL)

// Initial DB setup
// useful to clean up data you do not need to retain; avoids writing scripts to do the same
//db.createCollection('sessions');

// Insert a document 
//db.getCollection('sessions').insertOne({data: '1111', createdAt: new Date()});
//db.getCollection('sessions').find({});

// CREATE INDEX
//db.getCollection('sessions').createIndex({createdAt: 1}, {expireAfterSeconds: 10});

// Insert another document 
//db.getCollection('sessions').insertOne({data: '2222', createdAt: new Date()});

// Display data
//db.getCollection('sessions').find({});