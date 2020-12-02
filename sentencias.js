// insertOne (insertar un documento)
// insertMany (insertar muchos documentos)
// se deja a un lado el metodo insert

let user2 = {
    name: 'Fernando',
    last_name: 'Garcia',
    age: 24,
    email: 'fernando@codigofacilito.com'
}

let user3 = {
    name: 'Uriel',
    last_name: 'Camacho',
    age: 27,
    email: 'uriel@codigofacilito.com'
}

let user4 = {
    name: 'Marines',
    last_name: 'Médez',
    age: 25,
    email: 'marines@codigofacilito.com'
}

db.users.insertOne(user2)
db.users.insertMany([user3,user4])

//.find() puede recibir criterios de busqueda

// db.users.find(
//     {age: 25}, // Criterios -> Where
//     {name: true, email: true, _id: false} // Select
// ).pretty()

// cuando se quiere quitar un atributo de la busqueda
db.users.find(
    {age: 25}, // Criterios -> Where
    {age:false} // Select
).pretty()

// para buscar valor diferente a se usa la siguiente nomenclatura
// $ne -> diferente a 
// $eq -> igual a 

//obtengamos todos los usuarios cuya edad sea diferente de 25 

db.users.find(
    {
        age: {
            $ne: 25
        }
    }
).pretty()

//obtengamos todos los usuarios cuya edad sea igual a 25

db.users.find(
    {
        age: {
            $eq: 25
        }
    }
).pretty()

// find > documento
// El metodo .findOne() no incluye .pretty() 
// obtiene el primer elemento que cumpla con la condicion

db.users.findOne(
    {
        age: {
            $ne: 25
        }
    }
)


