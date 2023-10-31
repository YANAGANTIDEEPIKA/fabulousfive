// import  express  from "express"; 
// import mongoose from "mongoose";
// const app=express();
// mongoose.connect('mongodb+srv://21mh1a4265:HE42YNQbM3eJ5qOA@cluster0.gjtflzz.mongodb.net/Cluster0?retryWrites=true&w=majority')
// .then(() => app.listen(5000))
// .then(() =>
// console.log("Connected to Database & Listining to localhost 5000")
// )
// .catch((err) => console.log(err));

// app.listen(1303)
import express from "express";
const app = express();
app.use("/api", (req, res, next)=>{
res.send("hi hello deepika")
})
app.listen(1303)


// HE42YNQbM3eJ5qOA
// mongodb+srv://21mh1a4265:<password>@cluster0.gjtflzz.mongodb.net/?retryWrites=true&w=majority