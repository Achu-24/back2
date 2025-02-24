const express=require("express");
const app=express();
const port=3000;
app.use(express.json())

let login=[]

app.get("/",(req,res)=>{
    res.send("Running Successfully")
})

app.post("/email",(req,res)=>{
    login.push(req.body)
    res.json({error:"Email Added Successfully"})
})

app.post ("/password",(req,res)=>{
    login.push(req.body)
    res.json({error:"Password Added Successfully"})
})

app.get("/email",(req,res)=>{
    res.json(login);
})

app.get("/password",(req,res)=>{
    res.json(login)
})

app.get("/login/:id",(req,res)=>{
    const login=login.find(b=>b.login_id==req.params.id)
    res.json(email||{error:"Email Cannot Be Empty"})

})

app.get("/login/:id",(req,res)=>{
    const login=login.find(b=>b.login_id==req.params.id)
    res.json(password||{error:"Password Cannot Be Empty"})

})

app.put("/login/:id",(req,res)=>{
    const index=login.findIndex(b=>b.login_id==req.params.id)
    login[index]=req.body
    res.json({message:"Email Updated"})
})

app.put("/login/:id",(req,res)=>{
    const index=login.findIndex(b=>b.login_id==req.params.id)
    login[index]=req.body
    res.json({message:"Password Updated"})
})

app.listen(port,()=>{
    console.log("Login Page Successfully Running at http://localhost//3000{port}")})