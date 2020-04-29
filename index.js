const express = require("express") ;
const PORT = process.env.PORT||6006
app =express() ;

app.use(express.json({extended:true}))


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
next()
})





app.listen(PORT ) ;

modules.exports = app;
