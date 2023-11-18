import express, {Application} from 'express';
import dotenv from 'dotenv';
import { Signale } from "signale";
import { orderRouter } from './order/infraestructure/routes/orderRoutes';

const app:Application = express();
const signale = new Signale();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/orders',orderRouter);

app.listen(PORT,() => {
    signale.success(`Servidor corriendo en http://localhost:${PORT}`);
});