import { NextRequest } from "next/server";
// import { products } from "@/app/product-data";
import { connectToDb } from "../../db";

type Params={
    id:string;
}

export async function GET(request:NextRequest, {params}:{params:Params}) {
    const {db} = await connectToDb();
    const productId = params.id;

    // Using MongoDB
    const product = await db.collection('products').findOne({ id: productId });

    // Using static JSON product-data
    // const product = products.find(p=>p.id === productId);

    if(!product){
        return new Response('Product Not Found',{
            status:404
        });
    }
    return new Response(JSON.stringify(product),{
        status:200,
        headers:{
            'Content-Type':'application/json'
        }
    });
}