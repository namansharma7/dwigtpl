require('dotenv').config();
const express = require('express');
const ejs = require('ejs');

const userRoute = require('./routes/userRoutes');
//Hii, I'm Naman Sharma, Comment for git practice.
const port = process.env.SERVER_PORT | 4001;
const app = express();
app.set('view engine', 'ejs');//
app.set('views','./views');
app.use(express.static("public"));

app.use('/user', userRoute);

app.listen(port, function(){
    console.log(`app is running on port : ${port}`);
});
