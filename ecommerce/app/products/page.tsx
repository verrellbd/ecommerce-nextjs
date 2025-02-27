import { products } from "../product-data";
import ProductList from "../ProductsList";

export default function ProductsPage(){
    return ( 
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductList products={products}/>
        </div>
    );
}