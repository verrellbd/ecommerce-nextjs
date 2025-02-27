// import { products } from "../product-data";
import ProductList from "../ProductsList";

export default async function ProductsPage(){

    const response = await fetch('https://special-spoon-pgvpvx7q66rc7596-3000.app.github.dev/api/products');
    const products = await response.json();

    return ( 
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductList products={products}/>
        </div>
    );
}