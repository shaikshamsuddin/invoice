let express = require("express");
let path = require("path");

let app = express();

app.use(express.static(__dirname+"/dist/employee-management-system"));


app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname+"/dist/employee-management-system/index.html"));
});

let port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log("server listening the port no.8080");
});
