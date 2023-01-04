import express, { query } from 'express';
import fs from 'fs/promises';
import path from 'path';

const imagesRouter = express.Router();

imagesRouter.get('/', async (req , res): Promise <void> => {
    const filename = req.query['filename']; 
    const height = req.query['height']? parseInt(req.query['height'] as string): null
    const width = req.query['width']?  parseInt(req.query['width'] as string): null
      
});

// Get the file path of the filename //
const folderPathFullImage = `${path.resolve(__dirname,`../../../assets/images/${__filename}.jpeg`)}`;

// Resized Image from folderPathfullImage //
const folderPathImage = `${path.resolve(__dirname,`../../../assets/img/${__filename}-${height}x${width}.jpeg`)}`;

export default imagesRouter
