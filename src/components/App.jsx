import Menu from "./Menu";
import {useState} from "react";
import Products from "./Products";
import Checkout from "./Checkout";
import '../css/App.css';

export default function App() {
    const [pageContent, setPageContent] = useState('products');
    const [cart, setCart] = useState([]);
    const [cartSize, setCartSize] = useState(0);
    const [tshirtData, setTshirtData] = useState([]);
    const [hideFiltersButton, setHideFiltersButton] = useState(false);
    const [filters, setFilters] = useState('...');
    const [search, setSearch] = useState('');

    return (
        <div>
            <Menu setPageContent={setPageContent} cartSize={cartSize} tShirtData={tshirtData}
                  hideFiltersButton={hideFiltersButton} setHideFiltersButton={setHideFiltersButton}
                  setFilters={setFilters} setSearch={setSearch}/>

            {pageContent === 'products' &&
                <Products setCart={setCart} cartSize={cartSize} setCartSize={setCartSize} cart={cart}
                          tshirtData={tshirtData} setTshirtData={setTshirtData} filters={filters} search={search}/>}

            {pageContent === 'checkout' &&
                <Checkout cart={cart} setCart={setCart} setPageContent={setPageContent} setCartSize={setCartSize}
                          setHideFiltersButton={setHideFiltersButton}/>}
        </div>
    )
}

