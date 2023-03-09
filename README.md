# MongoDB - The Complete Developer's Guide

## Overview
Notes and scripts made from doing [this Udemy course](https://www.udemy.com/course/mongodb-the-complete-developers-guide/)

Any of the examples can be run in a mongo shell or a GUI like [Studio3T](https://studio3t.com/download/)

You will likely want to install the [Mongo Database Tools](https://www.mongodb.com/docs/database-tools/) as well.

## Notes

### Server Config
A number of options exist for configuring things like:
- default port
- db path
- log path

Options can be added via [command line](https://www.mongodb.com/docs/mongodb-shell/install/) or through a [configuartion file](https://www.mongodb.com/docs/manual/reference/configuration-options/)

Also see [this article](https://www.helenjoscott.com/2022/01/29/mongod-mongo-mongosh-mongos-what-now/) on differences between `mongod`, `mongo`, `mongosh`, `mongos`

### Importing Data
 Can import data from a `json` file if you have `mongo-tools` installed

 ```bash
 # Change into the directory with the file in it
 cd path/to/data/directory
 
 # import the data into "movieDB" in the "shows" collection

 # `--jsonArray` specifies that more than 1 document exists in the file to be imported
 
 # `--drop` means it will drop the collection and replace it with this data if it exists (will append if left off)
 mongoimport tv-shows.json -d movieDB -c shows --jsonArray --drop
 ```

 If you get authenication errors you may need to run something along the lines of:

 `mongoimport --authenticationDatabase admin --username myUser --password myPassword tv-shows.json -d movieDB -c shows --jsonArray --drop`