var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/hw", async function (req, res, next) {
  res.json({ message: "Hello, hacklahoma" });
});

router.get("/testdbconn", async function (req, res, next) {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("hacklahoma");
  const collection = db.collection("testdb");

  const ts = Date.now();
  const insertResult = await collection.insertMany([
    { ts, message: "test message " + ts },
  ]);
  const filteredDocs = await collection.find({ ts }).toArray();

  res.json({ insertResult, filteredDocs });
});

router.get("/wall", async function (req, res, next) {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("hacklahoma");
  const collection = db.collection("wall");

  const findResult = await collection.find({}).toArray();

  res.json(
    findResult.map(({ ts, message }) => {
      return { ts: ts, message: message };
    })
  );
});

router.post("/wall", async function (req, res, next) {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();

  const db = client.db("hacklahoma");
  const collection = db.collection("wall");

  const insertResult = await collection.insertOne({
    ts: Date.now(),
    message: req.body.message,
  });

  res.send();
});

module.exports = router;
