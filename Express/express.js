import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello this is from BD");
});

app.listen(7007, () => {
    console.log("running port 7007");
})