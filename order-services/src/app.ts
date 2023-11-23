import express, {Application} from 'express';
import dotenv from 'dotenv';
import { Signale } from "signale";
import morgan from 'morgan';

import { orderRouter } from './order/infraestructure/routes/orderRoutes';

const app:Application = express();
const signale = new Signale();

app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/',orderRouter);

app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});