import React, {useEffect, useState} from 'react';
import {render} from "@testing-library/react";
import cx from "classname";
import styles from "../product.card/product.card.module.css";
import style from "./product.details.module.css"
import {Link, useParams} from "react-router-dom";
import {addPurchase, getProduct} from "../../service/product.serveice";

const ProductDetails = ({updateCount}) => {
    const {id} = useParams();
    console.log(id);

    const [product, setProduct] = useState(getProduct(id));
    const [size, setSize] = useState("Выберите размер");
    useEffect(() => setProduct(getProduct(id)), [id]);

    const handleChange = (event) => {
        setSize(event.target.value)
    };

    const addToBasket = () => {
        if (size !== "Выберите размер") {
            addPurchase(product.id, size);
            updateCount();
        }
    };

    return (<div className={style.card}>
            <div className={styles.image}>
                <img className={styles.__photo} src={process.env.PUBLIC_URL + "/" + product.img}
                     alt="Изображение не найдено"/>
            </div>
            <div className={cx(styles.__name, styles._font)}>
                <span>{product.name}</span>
            </div>
            <div className={cx(styles.__price, styles._font)}>
                <span>{product.price}</span>
                <span>руб.</span>
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
    )
}

export default ProductDetails
