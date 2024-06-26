import http from "http";

// Create server object
http
  .createServer((req, res) => {
    // Write response to send to client
    res.write("Hello world");
    res.end();
  })
  .listen(5001, () => console.log("server running"));
