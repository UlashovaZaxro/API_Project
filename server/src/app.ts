import express from 'express';
import productRoutes from './routes/product.routes.ts'

const app = express();

app.use('/api/products', productRoutes)

export default app;