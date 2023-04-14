const http = require("http");
const fs = require("fs");
const lodash = require("lodash");

const server = http.createServer((req, res) => {
  console.log("request made from url: ", req.url);

  //lodash
  
  const num = lodash.random(0, 20);
  console.log(num);

  const greetOnce =lodash.once(() => {
    console.log("this message will be shown only once");
  });


  greetOnce()
  greetOnce()


  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(4200, "localhost", () => {
  console.log("Listening for requests on port 4200");
});
