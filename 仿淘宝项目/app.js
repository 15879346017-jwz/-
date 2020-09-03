const express=require("express");
const app=express();
app.listen(8080);
app.use(express.static("public"));
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({
    extended:false
}));

const proRouter=require("./pro/pro.js");
app.use("/pro",proRouter);