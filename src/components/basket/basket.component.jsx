import React, {useState} from "react";
import {getProduct, getPurchases, savePurchases} from '../../service/product.serveice'
import styles from './basket.module.css';
import cx from 'classname'
import BasketRow from "./basket-row/basket.row.component";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_CART_ROW} from "../../service/reducers/purchases.reducer";
import {CLOSE_BASKET} from "../../service/reducers/common.reducer";

const Basket = () => {
    const purchases = useSelector((store) => {
        return store.cart.purchases
    })

    const dispatch = useDispatch();

    const total = () => {
        let total = 0;
        purchases.forEach(value => {
            total += value.count * getProduct(value.id).price
        });
        console.log(total);
        return total;
    };

    const onCloseBasket = () => {
        dispatch({
            type: CLOSE_BASKET
        })
    };

    return (<div>
            <div className={cx(styles.modal, styles._basket, styles._scroll, styles._hidden)}>
                <div className={styles._content}>
                    <div className={styles.__header}>
                        <div className={cx(styles._title, styles.__font)}>
                            <div>
                                <span>Выбранные товары</span>
                            </div>
                        </div>
                        <div className={styles.__close} onClick={onCloseBasket}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125L21.9875 6.25Z"
                                    fill="#333333"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        {
                            Array.from(purchases.entries()).map(([idSize, purchase]) => {
                                console.log(idSize);
                                console.log(purchase);
                                return <BasketRow key={idSize}
                                                  idSize={idSize}
                                />
                            })
                        }
                    </div>
                    <div className={cx(styles.__total, styles._font)}>
                        <span>{total() + ' руб.'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket
