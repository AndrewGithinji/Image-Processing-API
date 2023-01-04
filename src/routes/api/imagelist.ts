import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';

const imagelist = express.Router();

// Retreive images From the assets folder //
imagelist.get('/', async (req , res): Promise <void> => {
    const folderPathFullImage = `${path.resolve(__dirname,'../../../assets/images')}`;

    const files: string[] | null = await fs.readdir(folderPathFullImage).catch(() => {
        res.status(500).send('Error images');
        return null;
    });
});

export default imagelist;