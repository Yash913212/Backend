import express from 'express';

const app = express();

app.use(express.json());

app.get('/get-data', (req, res) => {
    const data = { message: 'Hello, World!' };
    console.log('Retrieving data:', data);
    res.json(data);
});

app.put('/update-data', (req, res) => {
    const data = req.body;
    console.log('Updating data with:', data);
    res.json({ status: 'success', message: 'Data updated successfully', data });
});

app.post('/post-data', (req, res) => {
    const data = req.body;
    console.log('Received data:', data);
    res.status(201).json({ status: 'success', message: 'Data posted successfully', data });
});

app.delete('/delete-data', (req, res) => {
    const id = req.body && req.body.id;
    console.log('Deleting data with ID:', id);
    res.json({ status: 'success', message: `Data deleted successfully with ID ${id}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});