import shoppingBagImg from "../images/shoppingBag.png";
import '../css/Menu.css'
import {useState} from "react";

export default function Menu({
                                 setPageContent,
                                 cartSize,
                                 tShirtData,
                                 hideFiltersButton,
                                 setFilters,
                                 setSearch,
                                 setHideFiltersButton
                             }) {

    const [cssClass, setCssClass] = useState('');
    let tempSearch = '';

    function toggleFilter() {
        setCssClass(cssClass === '' ? 'show-filter' : '');
    }

    function handleColorFilter() {
        setFilters(event.target.value);
    }

    function handleSubmit() {
        event.preventDefault();
        setSearch(tempSearch);
        event.target.reset();
    }

    function handleInputChange() {
        tempSearch = event.target.value;
    }

    function handleProductClick() {
        setSearch('');
        setPageContent('products');
        setFilters('...');
        setHideFiltersButton(false);
    }

    function handleCartClick() {
        setHideFiltersButton(true);
        setPageContent('checkout');
        setCssClass('');
    }

    return (
        <div>
            <nav>
                <form className='search-form' onSubmit={handleSubmit}>
                    <input type='text' onChange={handleInputChange}/>
                    <button type='submit'>Search</button>
                </form>
                <h2 onClick={handleProductClick}>Produkter</h2>
                <div className='cart-div' onClick={handleCartClick}>
                    <img src={shoppingBagImg} className='cart'/>
                    <p className='cart-size'>{cartSize}</p>
                </div>
                {!hideFiltersButton && <h2 onClick={toggleFilter}>Filters</h2>}
            </nav>
            <aside className={'sidebar ' + cssClass}>
                <form>
                    <h3>Färg</h3>
                    <select onChange={handleColorFilter}>
                        <option>...</option>
                        {tShirtData.map((tshirt) => (
                            <option key={tshirt.id}>{tshirt.color}</option>
                        ))}
                    </select>
                </form>
            </aside>
        </div>
    )
}
