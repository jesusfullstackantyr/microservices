import express, {Application} from 'express';
import proxy from 'express-http-proxy';

import dotenv from 'dotenv';
import { Signale } from "signale";

const app:Application = express();
const signale = new Signale();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/orders', proxy('http://localhost:3001'));

app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});