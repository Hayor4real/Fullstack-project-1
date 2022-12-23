var express = require("express");
var mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

var dburl =
  "mongodb+srv://userperson:October18@cluster0.udsj0gg.mongodb.net/?retryWrites=true&w=majority";

var route = express();

route.get("/productdb", (req, res) => {
  mongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.send("Error while connecting with the database");
      console.log(err);
    } else {
      var dbRef = cluster.db("Product3DB");
      var collectionRef = dbRef.collection("electronicCollection");
      collectionRef.find().toArray((err, data) => {
        if (err) {
          res.send("Error will fetching the data");
        } else {
          res.json({
            results: data,
            Ok: true,
          });
        }
      });
    }
  });
}); //http://localhost:4001/productdb

route.listen(4001, () => {
  console.log("NodeJS server started");
});
