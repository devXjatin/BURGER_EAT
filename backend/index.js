import app from './app.js';
import {connectDB} from './config/database.js'

//databse connected
connectDB()

//server is running
app.listen(process.env.PORT,()=> console.log(`Server is running on Port ${process.env.PORT}`))