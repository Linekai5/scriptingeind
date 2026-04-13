import { MongoClient, ServerApiVersion } from 'mongodb';
import { connectionString } from '../secret.js';

export const client = new MongoClient(connectionString, {
    serverApi: ServerApiVersion.v1
});