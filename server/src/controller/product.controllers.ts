import {Request, Response} from "express";
import prisma from "../utils/prismaConfig.ts";

export const getAllProducts = async (req: Request, res:Response) => {
    const limit = req.query.limit;
    const page = req.query.offset;
    // console.log(req.query);
    if(!limit || !page) {
        return res.status(400).json({message:'Limit and page are required'})
    }

const skip = (+page -1) * +limit;

const products = await prisma.product.findMany({
    take: +limit,
    skip: skip,
    select: {
        id: true,
        name: true,
        price: true,
        description: true,
    }
})

    res.status (200).json({OK:true, data:products})
    
}
