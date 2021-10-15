/* La función deleteMany elimina todos los documentos insertado anteriormente*/
db.coleccion01.deleteMany({})

/* La función insertOne inserta un nuevo documento a la colección*/ 
db.coleccionParticular.insertOne({nombre:"Pepe", apellidos:"López García", edad: 20, dni:"12345678-O"})  
db.coleccionParticular.insertOne({nombre:"Lolo", apellidos:"Reyes Madrid", edad: 30, dni:"87654321-P"}) 
db.coleccionParticular.insertOne({nombre:"Tomás", apellidos:"Ramiro Leal", edad: 42, dni:"12349876-M"}) 
db.coleccionParticular.insertOne({nombre:"Juna",apellidos:"Corbacho Moya", edad: 18, dni:"09128734-L"}) 
db.coleccionParticular.insertOne({nombre:"Andrés",apellidos:"Gonzalez Sánchez", edad: 43, dni:"56761209-H"}) 
db.coleccionParticular.insertOne({nombre:"Rodolfo", apellidos:"Román Macho", edad: 55, dni:"12345678-J"}) 


/* La función insertMany añade muchos valores a la colección*/
db.coleccionParticular.insertMany
(
    [

{ _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
{ _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
{ _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
{ _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
{ _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }

    ]
)

/*
Compara los valores de ITEM que sean igual a "123"
*/
db.coleccionParticular.find({"item.code":{$eq:"123"}})