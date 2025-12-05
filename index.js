import http from 'http'
const server = http.createServer((req, res) => {
    console.log(req.method);
    if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ name: "Yash" }))
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello this is from backend")
    }
});
server.listen(3000, () => {
    console.log(`This server is running at ${3000}`)
});