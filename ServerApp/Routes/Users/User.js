var express = require("express");
var { MongoClient } = require("mongodb");

var dburl =
  "mongodb+srv://userperson:October18@cluster0.udsj0gg.mongodb.net/?retryWrites=true&w=majority";

var routes = express();

routes.get("/userdata", (req, res) => {
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.send({
        Ok: false,
        msg: "Error while connecting with the Database",
      });
      console.log(err);
    } else {
      const dbRef = cluster.db("test");
      const collRef = dbRef.collection("products");
      collRef.find().toArray((err, data) => {
        if (err) {
          res.send({
            OK: false,
            msg: "error while getting the data",
          });
        } else {
          res.json({
            OK: true,
            length: data.length,
            results: data,
          });
        }
      });
    }
  });
}); //http://localhost:4001/users/userdata

routes.post("/newuser", (req, res) => {
  MongoClient.connect(dburl, (err, cluster) => {
    var dbRef = cluster.db("test");
    var coll = dbRef.collection("products");
    coll.insertOne(req.body, (err) => {
      if (err) {
        res.json({
          OK: false,
          msg: "error while inserting the data",
        });
      } else {
        res.json({
          OK: true,
          msg: "Inserted Record Successfully",
        });
      }
    });
  });
}); //http://localhost:4001/users/newuser

module.exports = routes;
