const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

const app = express();

//DBUser: RrDBUser
//Password: sm6fyBUrKc3hNN8m

const uri = "mongodb+srv://RrDBUser:sm6fyBUrKc3hNN8m@cluster0.5zdm9v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
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