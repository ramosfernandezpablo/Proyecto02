db.coleccionParticular.insertOne
( 
    {
        item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm"}
    } 
)

db.coleccionParticular.deleteMany({})

db.coleccionParticular.insertMany
(
    [
        {item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm"}},
        {item: "folder", qty: 90, tags: ["cotton", "paper"], size: { h: 28, w: 37.5, uom: "cm"}},
        {item: "pen", qty: 10, tags: ["wooden", "grafito"], size: { h: 8, w: 10, uom: "cm"}},
        {item: "tablet", qty: 12, tags: ["cotton", "metal"], size: { h: 30, w: 45.5, uom: "cm"}}
    ]
)

db.coleccionParticular.insertMany
(
        [
            { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
            { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
            { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
            { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
            { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
        ]
)

db.coleccionParticular.deleteMany({})

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