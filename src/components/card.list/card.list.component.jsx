import React, {useEffect, useState} from 'react'
import {products} from "../../data/products.data";
import Product from "../product.card/product.card.component";
import Loader from "../loader/loader.component";
import styles from './card.list.module.css'
import cx from 'classname'
import {useSelector} from "react-redux";

function loadProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            3000
        )
    })
}

const CardList = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [curCategory, setCurCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const category = useSelector((state) => {
        return state.common.category
    })

    let filter = (p) => {
        return p.filter((product) => {
            return category === '' ? true : product.sex === category;
        });
    }

    const load = async () => {
        const loadedProducts = await loadProducts();
        setAllProducts(loadedProducts);
        setLoading(false);
        setFilteredProducts(filter(loadedProducts));
    }

    if (loading) {
        load();
    }

    useEffect(() => {
        if (category !== curCategory) {
            setFilteredProducts(filter(allProducts));
            setCurCategory(category);
        }
    })

    return (<div className={cx(styles._frame, styles.container)}>
            {loading ? (
                <Loader/>
            ) : (
                <>
                    {filteredProducts.map(product =>
                        <Product
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            sex={product.sex}
                            name={product.name}
                            price={product.price}
                        />
                    )}
                </>
            )
            }
        </div>
    )
}

export default CardList
