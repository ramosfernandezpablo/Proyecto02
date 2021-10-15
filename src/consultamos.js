/*Todos los documentos con todos sus campos*/
db.coleccionParticular.find()
{
    [
{ "_id" : ObjectId("6156cea90a77a2d853785f76"), "nombre" : "Pepe", "edad" : 20 },
{ "_id" : ObjectId("6156cea90a77a2d853785f77"), "nombre" : "Lolo", "edad" : 40 },
{ "_id" : ObjectId("6156cea90a77a2d853785f78"), "nombre" : "Tomás", "edad" : 37 },
{ "_id" : ObjectId("6156cea90a77a2d853785f79"), "nombre" : "Juna", "edad" : 21 },
{ "_id" : ObjectId("6156cea90a77a2d853785f7a"), "nombre" : "Andrés", "edad" : 15 },
{ "_id" : ObjectId("6156cea90a77a2d853785f7b"), "nombre" : "Rodolfo", "edad" : 63 }
    ]
}

/*Todos los documentos con edad igual a 20*/
db.coleccionParticular.find({edad: 20})

/*Todos los documentos de una coleccion*/
db.coleccionParticular.find({})

/*Encuentra a traves del campo status los valores iguales a D*/ 
db.coleccionParticular.find({status:"D"})

/*Encuentra a traves del campo status los valores iguales a D, pero usando el método equals*/ 
db.coleccionParticular.find( { status: { $eq: "D" } } )