// COLLECTION 1 - CLASSES
//db.createCollection('vehicleClasses');
//db.getCollection('vehicleClasses').insertMany([
//    { classId: 'C1', name: "CAR", description: "it drives", classMetadata: "interesting stuff."},
//    { classId: 'C2', name: "TRUCK", description: "it drives, but bigger", classMetadata: "truck go fast"},
//    { classId: 'C3', name: "AIRPLANE", description: "it flys", classMetadata: "interesting things."}
//]);

// COLLECTION 2 - TYPES (that use classes)
//db.createCollection('vehicleTypes');
//db.getCollection('vehicleTypes').insertMany([
//    { typeId: 'T1', brand: "Mazda", model: "Mazda 3", isHybrid: false, classId: 'C1'},
//    { typeId: 'T2', brand: "Honda", model: "Civic", isHybrid: true, classId: 'C1'},
//    { typeId: 'T3', brand: "Volkswagon", model: "Golf", isHybrid: true, classId: 'C1'},
//    { typeId: 'T4', brand: "Honda", model: "Big ol' truck", isHybrid: false, classId: 'C2'},
//]);

// COLLECTION 3 - LOTS (that use types)
//db.createCollection('vehicleParkingLots');
//db.getCollection('vehicleParkingLots').insertMany([
//        {
//        lotId: 'P1', location: 'Toronto', 
//        cars: [
//            {color: 'blue', vehicleTypeId: 'T1', otherInfo: 'arbitrary'},
//            {color: 'red', vehicleTypeId: 'T1', otherInfo: 'arbitrary'},
//            {color: 'yellow', vehicleTypeId: 'T2', otherInfo: 'arbitrary'},
//            {color: 'yellow', vehicleTypeId: 'T4', otherInfo: 'arbitrary'},   
//        ], 
//        isOpen: true },
//    {lotId: 'P2', location: 'Toronto', cars: [], isOpen: false }
//]);



// EXAMPLE 1 - MATCH, LOOKUP/JOIN, UNWIND/HYDRATE ON AN ARRAY  (Hydrate a single object)
//db.getCollection("vehicleParkingLots").aggregate([
//// STAGE: MATCH (make sure the _id exists)
//    { 
//        $match: { 
//            $and: [ { lotId: { $eq: 'P1' } }, { isOpen: { $eq: true } } ]
//        } 
//    },
//// STAGE: LOOKUP (JOIN) the car.vehicleTypeId to a foreign field
//    {
//        $lookup: {
//            from: "vehicleTypes",
//            localField: "cars.vehicleTypeId",
//            foreignField: "typeId",
//            as: "uniqueHydratedTypes"
//        }
//    },
//// STAGE: PROJECT (and UNWIND)
//    {
//        $project: {
//            lotId: 1,
//            location: 1,
//            isOpen: 1,
//    //        uniqueHydratedTypes: 1,         // NOTE: we do not project this field frp, the LOOKUP stage so it will not show up
//            cars: {
//                $map: {
//                    input: "$cars",
//                    as: "c",
//                    in: {
//                        $mergeObjects: [
//                            "$$c",
//                            {
//                                //NOTE: if the specified name already exists in the input document, the existing field will be overwritten
//                                vehicleType: {
//                                    // first matching document
//                                    $first: {
//                                        $filter: {
//                                            // from the vehicleTypeCollection
//                                            input: "$uniqueHydratedTypes", 
//                                            // where uniqueHydratedTypes[i].typeId matches the 
//                                            cond: { $eq: ["$$this.typeId", "$$c.vehicleTypeId"]}
//                                        }
//                                    }
//                                }
//                            }
//                        ] // end $mergeObjects
//                    }
//                } // end $map
//            } // end cars project
//        } // end $project
//    } // end STAGE
//])

// EXAMPLE 2 - MATCH, LOOKUP/JOIN, UNWIND/HYDRATE ON AN ARRAY  (Hydrate nested objects)
// db.getCollection("vehicleParkingLots").aggregate([
// // STAGE: MATCH (make sure the _id exists)
//     { 
//         $match: { 
//             $and: [ { lotId: { $eq: 'P1' } }, { isOpen: { $eq: true } } ]
//         } 
//     },
// // STAGE: LOOKUP (JOIN) the car.vehicleTypeId to a foreign field
//     // LOOKUP TYPES
//     {
//         $lookup: {
//             from: "vehicleTypes",
//             localField: "cars.vehicleTypeId",
//             foreignField: "typeId",
//             as: "uniqueHydratedTypes"
//         }
//     },
//     // LOOKUP CLASSES BASED ON ABOVE TYPES
//     {
//         $lookup: {
//             from: "vehicleClasses",
//             localField: "uniqueHydratedTypes.classId",
//             foreignField: "classId",
//             as: "uniqueHydratedClasses"
//         }
//     },
// // STAGE ADD FIELDS AND JOIN/HYDRATE
// {
//     $addFields: {
//         //overwrite the current `uniqueHydratedTypes` field with
//         uniqueHydratedTypes: {
//             // for each type in uniqueHydratedTypes
//             $map: {
//                 input: "$uniqueHydratedTypes",
//                 as: "t",
//                 in: {
//                     // merge the vehicleType with the hydrated vehicleClass
//                     $mergeObjects: [
//                         "$$t",
//                         {
//                             vehicleClass: {
//                                 // first matching document
//                                 $first: {
//                                     $filter: {
//                                         input: "$uniqueHydratedClasses",
//                                         cond: { $eq: ["$$this.classId", "$$t.classId"] }
//                                     }
//                                 }
//                             }
//                         }
//                     ] // end $mergeObjects
//                 } // end in
//             } // end $map
//         } // end uniqueHydratedTypes
//     } // end $addFields
// }, // end STAGE
// // STAGE: PROJECT (and UNWIND)
//     {
//         $project: {
//             lotId: 1,
//             location: 1,
//             isOpen: 1,
// //            uniqueHydratedClasses: 1,       // NOTE: we do not project this field from the LOOKUP stage so it will not show up
// //            uniqueHydratedTypes: 1,         // NOTE: we do not project this field from the LOOKUP stage so it will not show up
//             cars: {
//                 $map: {
//                     input: "$cars",
//                     as: "c",
//                     in: {
//                         $mergeObjects: [
//                             "$$c",
//                             {
//                                 //NOTE: if the specified name already exists in the input document, the existing field will be overwritten
//                                 vehicleType: {
//                                     // first matching document
//                                     $first: {
//                                         $filter: {
//                                             // from the vehicleTypeCollection
//                                             input: "$uniqueHydratedTypes", 
//                                             // where uniqueHydratedTypes[i].typeId matches the 
//                                             cond: { $eq: ["$$this.typeId", "$$c.vehicleTypeId"]}
//                                         }
//                                     }
//                                 }
//                             }
//                         ] // end $mergeObjects
//                     }
//                 } // end $map
//             } // end cars project
//         } // end $project
//     } // end STAGE
// ]);
    


