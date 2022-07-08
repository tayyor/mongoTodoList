const express = require('express');
const app = express();
const port = process.env.PORT || 3050;
const mongoose = require('mongoose');
require('dotenv/config');

const bodyParser = require('body-parser');
app.use(bodyParser.json());



//importing todo routes
const todosRoute = require('./routes/todos');

app.use('/todos',todosRoute);




app.get('/',(req,res) =>{
    res.send('...... Checking something!!')
});


// connect to db
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('connected to db!!'));



// listener handler
app.listen(port,() => console.log(`listening on port , ${port}....`));