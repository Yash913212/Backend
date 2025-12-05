import http from 'http'
const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url === "/users"){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({name: "Yash"}))
    }else{
        res.writeHead(200, {"Content-Type": "text/plane"});
        res.end("Hello this is from backend")
    }
});
server.listen(2000, ()=>{
    console.log(`This server is running at ${2000}`)
});