import React, {useState} from 'react'
import {addPurchase} from "../../service/product.serveice";
import styles from './product.card.module.css'
import cx from 'classname'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ADD_TO_CART} from "../../service/reducers/purchases.reducer";

const Product = ({id, img, sex, name, price, updateCount}) => {

    const [size, setSize] = useState("Выберите размер");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSize(event.target.value)
    };

    const addToBasket = () => {
        if (size !== "Выберите размер") {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    id: id,
                    size: size
                }
            })
        }
    };

    return (<div id="productCard">
            <div className={cx(styles.card, styles._border)}>
                <Link to={`/product/${id}`} className={styles.image}>
                    <img className={styles.__photo} src={img} alt="Изображение не найдено"/>
                </Link>
                <div className={cx(styles.__name, styles._font)}>
                    <span>{name}</span>
                </div>
                <div className={cx(styles.__price, styles._font)}>
                    <span>{price + ' руб.'}</span>
                </div>
                <div className={styles.size}>
                    <select className={cx(styles.size, styles._text)} onChange={handleChange}>
                        <option>Выберите размер</option>
                        <option>39-40</option>
                        <option>41-42</option>
                        <option>43-44</option>
                    </select>
                </div>
                <div className={cx(styles.button, styles._font)} onClick={addToBasket}>
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    )
}

export default Product
