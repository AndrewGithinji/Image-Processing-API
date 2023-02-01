const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const listImagesRouter = express.Router();

listImagesRouter.get('/', async (req: any, res: { send: (arg0: string) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  const folderPath = path.resolve(__dirname, '../../../assets/full');
  try {
    const files = await fs.readdir(folderPath);
    let html = `<h1>Available images</h1><p>List of images:</p><ul>`;
    files.forEach((file: any) => {
      html += `<li>${file}</li>`;
    });
    html += `</ul>`;
    res.send(html);
  } catch (error) {
    res.status(500).send('Error reading images');
  }
});

export default listImagesRouter;
