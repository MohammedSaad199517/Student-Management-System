const express=require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser")
const app = express()
const PORT =process.env.PORT || 3002;

const corsOptions = require('./config/corsOptions')
const verifyJWT = require ('.//middleware/verifyJWT');
const credentials = require('./middleware/credentials');
const sequelize = require('./config/database')

//--------------------------------------------
//handle options credentials check - before CORS!
//and fetch cookies credentials requirement
app.use(credentials);
//-------------------------------------------
//middleware for cookies
app.use(cookieParser())
//-------------------------------------------
//cors origin 
app.use(cors(corsOptions))
//--------------------------------------------
//built-in middleware to handle urlended data
//in other words , from data
//'content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));
//-----------------------------------------------
//built-in middleware for json
app.use(express.json())
//---------------------------------------------
// routes
// app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/isAdmin', require('./routes/isAdmin'));
app.use('/students', require('./routes/students'));
app.use('/course', require('./routes/courses'));

app.use('/teachers', require('./routes/teachers'));

// app.use(verifyJWT)

// app.use('/users', require('./routes/getUsers'));
// app.use('/employees', require('./routes/api/employees'));
//---------------------------------------------

sequelize.authenticate().then(()=>{
    console.log('connection has been established successfully.');
}).catch(err=>{
    console.log("unable to connect to the database :",err)
})
//---------------------------------
app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})