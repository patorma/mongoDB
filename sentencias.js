// insertOne (insertar un documento)
// insertMany (insertar muchos documentos)
// se deja a un lado el metodo insert

let user2 = {
  name: "Fernando",
  last_name: "Garcia",
  age: 24,
  email: "fernando@codigofacilito.com",
};

let user3 = {
  name: "Uriel",
  last_name: "Camacho",
  age: 27,
  email: "uriel@codigofacilito.com",
};

let user0 = {
  name: "Ivan",
  last_name: "Torres",
  age: 26,
  email: "ivanko@gmail.com",
};

let user4 = {
  name: "Marines",
  last_name: "Médez",
  age: 25,
  email: "marines@codigofacilito.com",
};

db.users.insertOne(user2);
db.users.insertMany([user3, user4]);

//.find() puede recibir criterios de busqueda

// db.users.find(
//     {age: 25}, // Criterios -> Where
//     {name: true, email: true, _id: false} // Select
// ).pretty()

// cuando se quiere quitar un atributo de la busqueda
db.users
  .find(
    { age: 25 }, // Criterios -> Where
    { age: false } // Select
  )
  .pretty();

// para buscar valor diferente a se usa la siguiente nomenclatura
// $ne -> diferente a
// $eq -> igual a

//obtengamos todos los usuarios cuya edad sea diferente de 25

db.users
  .find({
    age: {
      $ne: 25,
    },
  })
  .pretty();

//obtengamos todos los usuarios cuya edad sea igual a 25

db.users
  .find({
    age: {
      $eq: 25,
    },
  })
  .pretty();

// find > documento
// El metodo .findOne() no incluye .pretty()
// obtiene el primer elemento que cumpla con la condicion

db.users.findOne({
  age: {
    $ne: 25,
  },
});

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

db.users.find({
  age: {
    $lte: 26, // <=
  },
});

// Obtener todos los usuarios cuya edad sea menor a 26

db.users.find({
  age: {
    $lt: 26, // <
  },
});

// $gt >
// $gte >=
// $lt <
// $lte <=
// $eq ==
// $ne !=

// Operadores Lógicos
// $and y el $or

// Obtener todos los usuarios cuya edad sea mayor a 20  y menor a 26
db.users
  .find({
    $and: [
      {
        age: { $gt: 20 },
      },
      {
        age: { $lt: 26 },
      },
    ],
  })
  .pretty();

// Obtener todos los usuarios cuyo nombre sea Patrico o Uriel
db.users.find({
  $or: [
    {
      name: "Patricio Torres",
    },
    {
      name: "Uriel",
    },
  ],
});

// Obtener todos los usuarios cuyo nombre sea Patricio Torres o Uriel o la edad sea mayor a 20 y menor a 25

db.users.find({
  $or: [
    {
      name: "Patricio Torres",
    },
    {
      name: "Uriel",
    },
    {
      $and: [{ age: { $gt: 20 } }, { age: { $lt: 25 } }],
    },
  ],
});

db.books.insertMany([
  { title: "Don Quijote de la Mancha", sales: 500 },

  { title: "Historia de dos ciudades", sales: 200 },
  { title: "El señor de los anillos", sales: 150 },
  { title: "El principito", sales: 140 },

  { title: "El hobbit", sales: 100 },

  { title: "Alicia en el país de las maravillas", sales: 100 },

  { title: "El código Da Vinci", sales: 80 },

  { title: "El alquimista", sales: 65 },
]);

// like -> expresión regular
// Obtener todos los libros cuyo titulo comience con El 
// Obtener todos los libros cuyo titulo finalice con s
// Obtener todos los libros que posean en su titulo la palabra la

// Equivalente en SQL
// WHERE title LIKE 'El%
db.books.find(
    {
        title: /^El/
    }
)
// WHERE title LIKE '%s'
db.books.find(
    {
        title: /s$/
    }
)
// WHERE title LIKE '%la%'
db.books.find(
    {
        title: /la/
    }
)