import express from 'express';
import dotenv from 'dotenv'

const app = express();
export default app

dotenv.config({
    path:"./env/config.env"
})