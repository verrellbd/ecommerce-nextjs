// import { products } from "../product-data";
import ProductList from "../ProductsList";

export default async function ProductsPage(){

    const response = await fetch('https://special-spoon-pgvpvx7q66rc7596-3000.app.github.dev/api/products',{
        cache:'no-cache'
    });
    const products = await response.json();

    const response2 = await fetch('https://special-spoon-pgvpvx7q66rc7596-3000.app.github.dev/api/users/2/cart',{
        cache:'no-cache'
    });
    const cartProducts = await response2.json();

    return ( 
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductList products={products} initialCartProducts={cartProducts}/>
        </div>
    );
}