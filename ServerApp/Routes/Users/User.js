var express = require("express");
var { MongoClient, ObjectId } = require("mongodb");
const dbname = "test";
const collectionname = "products";

// database
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

routes.get("/specificuser/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connecting with database",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);
      collRef
        .find({
          _id: ObjectId(id),
        })
        .toArray((err, data) => {
          if (err) {
            res.json({
              OK: false,
              msg: "Error while fetching the data",
            });
          } else {
            res.json({
              OK: true,
              results: data,
            });
          }
        });
    }
  });
}); //http://localhost:4001/users/specificuser/<id>

routes.put("/updateuser/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connecting with database",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);
      collRef.updateOne(
        { _id: ObjectId(id) },
        {
          $set: req.body,
        },
        (err, data) => {
          if (err) {
            res.json({
              OK: false,
              msg: "Failed to Update Information",
            });
          } else {
            res.json({
              Ok: true,
              msg: "Updated sucessfully",
            });
          }
        }
      );
    }
  });
}); //http://localhost:4001/users/updateuser

routes.delete("/delete/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(dburl, (err, cluster) => {
    if (err) {
      res.json({
        OK: false,
        msg: "Error while connecting with database",
      });
    } else {
      var dbRef = cluster.db(dbname);
      var collRef = dbRef.collection(collectionname);
      collRef.deleteOne({ _id: ObjectId(id) }, (err, data) => {
        if (err) {
          res.json({
            OK: false,
            msg: "Failed to Delete Information",
          });
        } else {
          res.json({
            Ok: true,
            msg: "Deleted Successfully",
          });
        }
      });
    }
  });
}); //http://localhost:4001/users/delete/

module.exports = routes;
