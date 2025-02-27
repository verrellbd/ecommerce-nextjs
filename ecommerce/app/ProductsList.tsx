import Image from "next/image";
import Link from "next/link";
import {Product, products} from "./product-data";

export default function ProductList({products} : {products: Product[]}){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
                <Link key={product.id} href={"/products/" + product.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                    <div className="flex justify-center mb-4 h-48 relative">
                        <Image src={ '/' + product.imageUrl} alt="Product Image" fill className="object-cover rounded-md" />
                    </div>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                </Link>
            ))}
        </div>
    )
}