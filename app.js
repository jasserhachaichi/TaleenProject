const express = require('express')
const app = express()
const port = 3000

//  auto refrech
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
liveReloadServer.watch(path.join(__dirname, 'views'));
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 
//  end auto refrech

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});















// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.static('views'));



app.get("/", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get("/index.html", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.get("/product", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'product-details.html'));
});
app.get("/product-details.html", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'product-details.html'));
});


app.get("/login", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'auth-login.html'));
});

app.get("/dashboard", (req, res) => {
  // Use the path.join method to correctly resolve the file path
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});


















//-------------------------------------------------
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});
