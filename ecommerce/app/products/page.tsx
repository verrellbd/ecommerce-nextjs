import { products } from "../product-data";
import ProductList from "../ProductsList";

export default function ProductsPage(){
    return ( 
        <>
        <h1>Products</h1>
        <ProductList products={products}/>
        </>
    );
}