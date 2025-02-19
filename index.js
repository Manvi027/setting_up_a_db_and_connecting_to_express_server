const express = require('express');
const { resolve } = require('path');
require('dotenv').config()
const {connect} = require('mongoose')

const app = express();
const port = 3010;
const db_url = process.env.DB_URl;

app.use(express.static('static'));

const connectToDb = async(url)=>{

  await connect(url)

}

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try{
    await connectToDb(db_url)
    console.log(`Example app listening at http://localhost:${port}`);
    console.log("successfully connected DB")
  }
  catch(err){
    console.log(err)
  }
});
