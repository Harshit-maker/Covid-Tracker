const express= require("express");

const app = express();
app.use(express.static("public"));
app.get("/",function(req,res)
{
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
})
app.get("/Home",function(req,res)
{
  res.sendFile(__dirname + "/home.html");

})
app.get("/About",function(req,res)
{
  //console.log(entered_about);
  res.sendFile(__dirname + "/about.html");

})
app.get("/Tracker",function(req,res)
{
  res.redirect("/");
    //res.sendFile(__dirname + "/index.html");

})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
{
  console.log("Server is running on port 3000");
});
