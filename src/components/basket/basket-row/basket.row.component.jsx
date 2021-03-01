import React, {useState} from "react";
import Counter from "../../counter/counter.component";
import {getProduct} from "../../../service/product.serveice";
import styles from './basket.row.module.css';
import cx from 'classname';
import store from "../../../service/store";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART, DELETE_CART_ROW, DELETE_FROM_CART} from "../../../service/reducers/purchases.reducer";

const BasketRow = ({idSize}) => {

    const purchaseValue = useSelector((state => {
        return state.cart.purchases.get(idSize);
    }));
    const product = getProduct(purchaseValue.id);
    const dispatch = useDispatch();
    let count = purchaseValue.count;
    let size = purchaseValue.size;

    const remove = () => {
        dispatch({
            type: DELETE_CART_ROW,
            payload: {
                idSize:idSize
            }
        })
    }

    const purchaseUpdated = (count) => {
        if (purchaseValue.count < count) {
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    id: purchaseValue.id,
                    size: size
                }
            })
        } else {
            dispatch({
                type: DELETE_FROM_CART,
                payload: {
                    idSize: idSize
                }
            })
        }
    }

    return (<div>
            <div className={cx(styles.product, styles._font)}>
                <div>
                    <img className={styles.__image} src={process.env.PUBLIC_URL + "/" + product.img} alt="Изображение не найдено"/>
                </div>
                <div>{product.name}</div>
                <div>{size}</div>
                <Counter value={count} countUpdated={purchaseUpdated}/>
                <div>{product.price * count + ' руб.'}</div>
                <div onClick={remove}>
                    <svg className={styles.__remove} width="30" height="30" viewBox="0 0 30 30" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.25 27.5H8.75C7.36929 27.5 6.25 26.3807 6.25 25V8.75H3.75V6.25H8.75V5C8.75 3.61929 9.86929 2.5 11.25 2.5H18.75C20.1307 2.5 21.25 3.61929 21.25 5V6.25H26.25V8.75H23.75V25C23.75 26.3807 22.6307 27.5 21.25 27.5ZM8.75 8.75V25H21.25V8.75H8.75ZM11.25 5V6.25H18.75V5H11.25ZM18.75 22.5H16.25V11.25H18.75V22.5ZM13.75 22.5H11.25V11.25H13.75V22.5Z"
                            fill="#333333"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default BasketRow
