const express = require("express")
const mysql = require('mysql');


const app = express();
const port = 3000;



//to make sure that it is formatted
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// the connection to database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ahmed22",
  database: "forcars",
  multipleStatements: true // so you can use multiple lines in sql query
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to Database!");
});

//GET all the cars from db
app.get('/cars', (req, res) => {
  console.log("starting the query")
  con.query("SELECT * FROM car", (err, result, fields) => {
    if (result == null)
      console.log('DB is empty, please add data first and try again')
    else {
      res.json(result)
      console.log(result)
    }
  })
})

//GET car by id
app.get('/cars/:id', (req, res) => {
  const id = req.params.id
  console.log("starting the query")
  con.query("SELECT * FROM car where carID = ?", [id], (err, result, fields) => {
    if (result == null)
      console.log('DB is empty, please add data first and try again')
    //or Console.log(err)
    else {
      res.json(result)
      console.log(result)
    }
  })
})


//Add car
app.post('/cars', (req, res) => {
  let car_data = req.body;

  var sql = "SET @type = ?;SET @brand = ?;SET @license_plate = ?; \
   CALL carAdd(@type, @brand, @license_plate); ";

  con.query(sql, [car_data.type, car_data.brand, car_data.license_plate],
    (err, result, fields) => {
      if (err)
        Console.log(err)
      else {
        res.json('car is added')
        console.log('car is added')
      }
    })
})


//Delete car by id
app.delete('/cars/:id', (req, res) => {
  const id = req.params.id
  console.log("starting the query")
  con.query("delete from car where carID = ?", [id], (err, result, fields) => {
    if (result == null)
      console.log('DB is empty, please add data first and try again')
    //or Console.log(err)
    else {
      res.json('car is deleted ')
      console.log('car is deleted ')
    }
  })
})


//update car by id
app.put('/cars', (req, res) => {
  let car_data = req.body;

  var sql = "SET @carID = ?;SET @type = ?;SET @brand = ?;SET @license_plate = ?; \
  CALL carEdit(@type,@brand,@license_plate,@carID);";

  console.log("starting the query")
  con.query(sql, [car_data.carID, car_data.type, car_data.brand, car_data.license_plate],
    (err, result, fields) => {
      if (result == null)
        console.log('DB is empty, please add data first and try again')
      //or Console.log(err)
      else {
        res.json('car is updated')
        console.log('car is updated')
      }
    })
})

//output the port number to the console
app.listen(port, () => console.log(`Server listening at port ${port}`));