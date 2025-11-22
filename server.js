const express=require("express");
const path=require("path");
const fs=require("fs");
const app=express();
const port=process.env.PORT||3000;
const driveId=process.env.DRIVE_APK_ID||"1FvqAsFbkLXurmj_1wt0Rb0tMiYNmW5Y9";
app.use(express.static(path.join(__dirname)));
app.get("/downloads/lex-ia.apk",(req,res)=>{
  const p=path.join(__dirname,"downloads","lex-ia.apk");
  fs.access(p,fs.constants.F_OK,(err)=>{
    if(!err){res.sendFile(p);}else{res.redirect(302,`https://drive.google.com/uc?export=download&id=${driveId}`);}
  });
});
app.get("*",(req,res)=>{res.sendFile(path.join(__dirname,"index.html"));});
app.listen(port,()=>{console.log(`Servidor iniciado: http://localhost:${port}/`)});