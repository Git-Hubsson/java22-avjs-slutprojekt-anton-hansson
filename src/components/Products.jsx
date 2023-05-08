import {useEffect} from "react";
import "../css/Products.css";
import Product from "./Product";

export default function Products({
                                     setCart,
                                     cartSize,
                                     setCartSize,
                                     cart,
                                     tshirtData,
                                     setTshirtData,
                                     filters,
                                     search
                                 }) {

    async function getTshirts() {
        const url =
            "https://products-22027-default-rtdb.europe-west1.firebasedatabase.app/clothes/tshirt.json";
        const response = await fetch(url);
        const data = await response.json();
        setTshirtData(data);
    }

    useEffect(() => {
        getTshirts();
    }, []);


    return (
        <div>
            <ul className="products">
                {tshirtData.filter(tshirt => (filters === '...' || tshirt.color === filters) &&
                    (search === '' || tshirt.name.toLowerCase().includes(search.toLowerCase())))
                    .map(tshirt => (
                        <Product tshirt={tshirt} setCart={setCart} cartSize={cartSize} setCartSize={setCartSize}
                                 cart={cart}/>
                    ))}
            </ul>
        </div>
    );
}