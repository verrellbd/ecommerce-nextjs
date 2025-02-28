import ShoppingCartList from "./ShoppingCartList";

export default async function CartPage(){
    const response = await fetch('https://special-spoon-pgvpvx7q66rc7596-3000.app.github.dev/api/users/2/cart',{
        cache: 'no-cache',
    });

    const cartProducts = await response.json();

    return (
        <ShoppingCartList inititalCartProducts={cartProducts}/>
    );
}