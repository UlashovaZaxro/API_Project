import express from 'express';
import { getAllProducts } from '../controller/product.controllers.ts';

const router = express.Router();

router.get('/', getAllProducts)

export default router