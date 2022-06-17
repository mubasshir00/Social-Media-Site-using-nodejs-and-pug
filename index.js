const express = require('express');
const app = express();
const port = 3005;
const server = app.listen(port,()=>console.log("Server Listing on",port));

app.set("view engine","pug");
app.set("views","views");

app.get("/",(req,res,next)=>{
    const payload = {
        pageTitle : "Home"
    }
    res.status(200).render("home",payload)
})

