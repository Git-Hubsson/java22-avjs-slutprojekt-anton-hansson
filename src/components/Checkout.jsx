import '../css/Checkout.css'
import {useState} from "react";
import CheckoutProducts from "./CheckoutProducts";

export default function Checkout({cart, setCart, setPageContent, setCartSize, setHideFiltersButton}) {
    const [purchaseComplete, setPurchaseComplete] = useState(false);
    let totalPrice = 0;

    cart.map(product => totalPrice += product.item.price * product.quantity);

    async function buy() {
        for (let i = 0; i < cart.length; i++) {

            const url = `https://products-22027-default-rtdb.europe-west1.firebasedatabase.app/clothes/tshirt/${cart[i].item.id}.json`;
            const response = await fetch(url);
            const data = await response.json();
            const newSaldo = {
                saldo: data.saldo - cart[i].quantity
            };
            const options = {
                method: "PATCH",
                body: JSON.stringify(newSaldo),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            };
            await fetch(url, options);
        }
        setCart([]);
        setCartSize(0);
        setPurchaseComplete(true);
    }

    function emptyCart() {
        setCart([]);
        setCartSize(0);
        setPageContent('products');
        setHideFiltersButton(false);
    }


    return (
        <div className='checkout-div'>
            {purchaseComplete ?
                <h1>Tack för köpet!</h1>
                :
                <div>
                    <h2>Kundvagn</h2>
                    <ul className='checkoutUl'>
                        {cart.map((product) => (
                            <CheckoutProducts product={product}/>
                        ))}
                    </ul>
                    <hr/>
                    <p>Totalt pris: {totalPrice} kr</p>
                    <button onClick={buy}>Köp</button>
                    <br/>
                    <button onClick={emptyCart}>Töm varukorgen</button>
                </div>
            }
        </div>
    );
}