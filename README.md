# MongoDB - The Complete Developer's Guide

## Overview
Notes and scripts made from doing [this Udemy course](https://www.udemy.com/course/mongodb-the-complete-developers-guide/)

Any of the examples can be run in a mongo shell or a GUI like [Studio3T](https://studio3t.com/download/)

You'll want to install [Mongo Database Tools](https://www.mongodb.com/docs/database-tools/) as well.

## Notes

### Server Config
A number of options exist for configuring things like:
- default port
- db path
- log path

Options can be added via [command line](https://www.mongodb.com/docs/mongodb-shell/install/) or through a [configuration file](https://www.mongodb.com/docs/manual/reference/configuration-options/)

Also see [this article](https://www.helenjoscott.com/2022/01/29/mongod-mongo-mongosh-mongos-what-now/) on differences between `mongod`, `mongo`, `mongosh`, `mongos`

### Importing Data
 Can import data from a `json` file if you have `mongo-tools` installed

 ```bash
 ## Change into the directory with the file in it
 cd path/to/data/directory
 
 ## Import data (replace `tv.shows.json`, `movieDB`, and `shows` accordingly)
 # `--jsonArray` specifies that more than 1 document exists in the file to be imported
 # `--drop` means it will drop the collection and replace it with this data if it exists (will append if left off)
 mongoimport tv-shows.json -d movieDB -c shows --jsonArray --drop
 ```

 If you get authentication errors you may need to run something along the lines of:

 `mongoimport --authenticationDatabase admin --username myUser --password myPassword tv-shows.json -d movieDB -c shows --jsonArray --drop`

 # Indexes
 Indexes are helpful for retrieving smaller subsets of the dataset. 

Restriction 1 - Indexes can actually slow down queries that return all _(or most)_ of the data set. This is because an extra step is added (eg. get index pointers to the documents then get the documents)