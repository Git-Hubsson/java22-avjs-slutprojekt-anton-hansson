export default function CheckoutProducts({product}) {

    return (
        <li key={product.item.id}>
            <img src={product.item.img} className='checkout-img'/>
            <p>
                {product.quantity} x {product.item.name}
            </p>
            <p>{product.item.price * product.quantity} kr</p>
        </li>
    )
}