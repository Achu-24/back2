const express=require("express");
const app=express();
const port=3000;
app.use(express.json())

let login=[]

app.get("/",(req,res)=>{
    res.send("running")
})

app.post("/email",(req,res)=>{
    login.push(req.body)
    res.json({error:"email added successfully"})
})

app.post ("/password",(req,res)=>{
    login.push(req.body)
    res.json({error:"password added successfully"})
})

app.get("/email",(req,res)=>{
    res.json(login);
})

app.get("/password",(req,res)=>{
    res.json(login)
})

app.get("/login/:id",(req,res)=>{
    const login=login.find(b=>b.login_id==req.paramsms.id)
    res.json(email||{error:"email not found"})

})

app.get("/login/:id",(req,res)=>{
    const login=login.find(b=>b.login_id==req.paramsms.id)
    res.json(password||{error:"password not found"})

})

app.put("/login/:id",(req,res)=>{
    const index=login.findIndex(b=>b.login_id==req.params.id)
    login[index]=req.body
    res.json({message:"email updated"})
})

app.put("/login/:id",(req,res)=>{
    const index=login.findIndex(b=>b.login_id==req.params.id)
    login[index]=req.body
    res.json({message:"password updated"})
})

app.listen(port,()=>{
    console.log("login page successfully running at http://localhost//3000{port}")})