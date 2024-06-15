const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//DBUser: RrDBUser
//Password: sm6fyBUrKc3hNN8m

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.5zdm9v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const usersCollection = client.db('resaleRepo').collection('users');
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //users info collection
    app.post('/users', async(req, res) =>{
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    })

  } finally {
    
  }
}
run().catch(console.dir);


//middleware
app.use(cors());
app.use(express.json());

app.get('/', async(req, res) =>{
    res.send('Resale Repo server is running...');
})

app.listen(port, () => console.log(`Resal Repo running ${port}`))