 require('dotenv/config');
const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes

const authRoutes = require('./routes/auth');


//mongodb connection string
// mongodb+srv://root:<password>@cluster0.uqojc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://root:dbroot@cluster0.uqojc.mongodb.net/ecommerce?retryWrites=true&w=majority`,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(() => {console.log("Database is connected")});

// console.log(process.env.MONGO_DB_PASSWORD);

app.use(express.json());

app.use('/api',authRoutes);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running in  ${port}....`));

