import express, { Response } from 'express';
import fs from 'fs';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (_, res) => {
    res.status(200).send('Server is working!');
});

if (!fs.existsSync(path.resolve(__dirname, '../assets/thumb'))) {
    fs.mkdirSync(path.resolve(__dirname, '../assets/thumb'));
}

app.listen(port, () => console.log(`Running on port ${port}`));

export default app;
