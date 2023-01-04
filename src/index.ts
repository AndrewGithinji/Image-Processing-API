import express from 'express';
const app = express();
const port = 3000; 

// Created an endpoint // 

app.get ('/', (req , res) => {
    res.redirect('/api');
});
app.get ('/api', (req, res) => {
    res.send('First Image Processor');
});

// Starting the express server //

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});