import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

let myText = "";

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
    myText = req.body.blog;
    res.render("viewing.ejs",{
        textToPost : myText,
    });
});
app.post("/edit",(req,res)=>{
    myText = req.body.edit;
    res.render("update-delete.ejs",{
        textToEdit : myText,
    });
});
app.post("/save",(req,res)=>{
    myText = req.body.save;
    res.render("viewing.ejs",{
        textToPost : myText,
    });
});
app.post("/delete",(req,res)=>{
    myText = "";
    // res.render("update-delete.ejs",{
    //     textToEdit : myText,
    // })
    res.redirect("/");
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});