// src/bezoekers.js
import { client } from './dbconnect.js';
import { ObjectId } from 'mongodb';

const dbName = "WebsiteData";
const collectionName = "bezoekers";

// READ: Haal alle bezoekers op
export const getBezoekers = async (req, res) => {
    try {
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const results = await collection.find().toArray();
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

// CREATE: Voeg een nieuwe bezoeker toe (POST)
export const addBezoeker = async (req, res)=> {
    try {
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const nieuweBezoeker = req.body; // Data komt uit de request body
        const result = await collection.insertOne(nieuweBezoeker);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

// UPDATE: Pas een bezoeker aan via ID (PUT)
export const updateBezoeker = async (req, res) => {
    try {
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const query = { _id: new ObjectId(req.params.id) };
        const updateDoc = { $set: req.body };
        const result = await collection.updateOne(query, updateDoc);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

// DELETE: Verwijder een bezoeker via ID (DELETE)
export const deleteBezoeker = async (req, res) => {
    try {
        await client.connect();
        const collection = client.db(dbName).collection(collectionName);
        const query = { _id: new ObjectId(req.params.id) };
        const result = await collection.deleteOne(query);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};