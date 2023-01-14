var express = require("express");
var mongodb = require("mongodb");
var dotenv = require("dotenv");
var cors = require("cors");
const mongoClient = mongodb.MongoClient;
var userRouter = require("./Routes/Users/User");
const { application } = require("express");

var route = express();
dotenv.config({ path: "./config.env" });
route.use(cors());
// route.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );
route.use(express.json());

route.use("/users", userRouter);

route.get("/productdb", (req, res) => {
  mongoClient.connect(process.env.DATABASE, (err, cluster) => {
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
});

route.listen(4001, () => {
  console.log("NodeJS server started");
});
