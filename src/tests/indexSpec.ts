import express from 'express';
import app from '../index';
import path from 'path';
import supertest from 'supertest';


const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test endpoints', (): void => {
    describe('endpoint: /', (): void => {
      it('gets /', async (): Promise<void> => {
        const response: supertest.Response = await request.get('/');
  
        expect(response.status).toBe(200);
      });
    });
  })

  