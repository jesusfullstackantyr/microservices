import express, {Application} from 'express';
import dotenv from 'dotenv';
import { Signale } from "signale";
import morgan from 'morgan';
import { productRouter } from './inventory/infraestructure/routes/productRouter';
import { DecreaseSoldStockUseCase } from './inventory/application/decreaseSoldStockUseCase';
import { MysqlProductRepository } from './inventory/infraestructure/repositories/mysqlProductRepository';
import { startOrderConsumer } from './inventory/infraestructure/services/orderConsumer';
import { drecreaseSoldStockUseCaseService } from './inventory/infraestructure/dependencies';


const app:Application = express();
const signale = new Signale();

app.use(morgan('dev'));

dotenv.config();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/',productRouter);


async function startServer() {

    await drecreaseSoldStockUseCaseService();

    app.listen(PORT,() => {
        signale.success(`Servidor corriendo en http://localhost:${PORT}`);
    });

}

startServer();