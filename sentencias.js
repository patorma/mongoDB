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

let user0 = {
    name: 'Ivan',
    last_name: 'Torres',
    age:26,
    email: 'ivanko@gmail.com'
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

// operadores relacionales
// Obtener todos los usuarios cuya edad sea mayor a 20

// db.users.find(
//     {
//         age: {
//             $gt: 20 // >
//         }
//     }   
// ) 

// Obtener todos los usuarios cuya edad sea mayor igual a 26

// db.users.find(
//         {
//             age: {
//                 $gte: 26 // >=
//             }
//         }   
//     ) 

// Obtener todos los usuarios cuya edad sea menor igual a 26

db.users.find(
    {
        age: {
            $lte: 26 // <=
        }
    }   
) 

// Obtener todos los usuarios cuya edad sea menor a 26

db.users.find(
    {
        age: {
            $lt: 26 // <
        }
    }   
) 

// $gt >
// $gte >=
// $lt <
// $lte <= 
// $eq ==
// $ne !=

