
const app = require("./app");

//Development
// app.listen(3000, () => {
//     console.log("server is running http://localhost:3000");
//   });
  
  //Production
  
  var server= app.listen(process.env.PORT || 3000, function () {
  
     var port= server.address().port;
     console.log("Express is working on port" + port)
  })