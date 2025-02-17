import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://aquinorafaeldev:Le%40f2598@cluster0.zxdev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");
