import { MongoClient } from 'mongodb';
const dotenv = require("dotenv").config();

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(process.env.DATABASE_CONN);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: "Meetup inserted" });
    }
}

export default handler;