import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Usa a variável de ambiente MONGODB_URI
const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("spotify");
