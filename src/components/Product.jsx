import {useState} from "react";

export default function Product({
                                    tshirt,
                                    setCart,
                                    cartSize,
                                    setCartSize,
                                    cart
                                }) {

    const [quantities, setQuantities] = useState({});

    function addToCart(tshirt) {
        event.preventDefault();
        const quantity = parseInt(quantities[tshirt.id]);
        if (quantity > 0 && quantity <= tshirt.saldo) {
            let cartCopy = [...cart];
            const existingItem = cartCopy.find(product => product.item.id === tshirt.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                const newCartItem = {item: tshirt, quantity: quantity};
                cartCopy.push(newCartItem);
            }

            setCart(cartCopy);
            setCartSize(cartSize + quantity);
            setQuantities({...quantities, [tshirt.id]: 0});

        }
        event.target.reset();
    }

    function handleInputChange(tshirt) {
        event.preventDefault();
        const newQuantities = {...quantities};
        newQuantities[tshirt.id] = (event.target.value);
        setQuantities(newQuantities);
    }

    return (
        <li key={tshirt.id}>
            <img src={tshirt.img}/>
            <p>{tshirt.name}</p>
            <p>{tshirt.price} kr</p>
            <div className="quantity-div">
                <form onSubmit={() => addToCart(tshirt)}>
                    <input
                        id='inputValue'
                        type="number"
                        min="0"
                        max={tshirt.saldo}
                        defaultValue="0"
                        onClick={() => handleInputChange(tshirt)}
                    />
                    <button>Lägg till i kundvagn</button>
                </form>
            </div>
            <p>Lagersaldo: {tshirt.saldo}</p>
        </li>
    )
}