import express from 'express';
import studentRoutes from './Routes/studentRoutes.js';

const app = express();
app.use(express.json());

app.use('/', studentRoutes);


const port = 7777;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});