import React from 'react'
import styles from './menu.module.css'
import cx from 'classname'
import {useDispatch} from "react-redux";
import {CATEGORY} from "../../service/reducers/common.reducer";

const Menu = () => {
    const dispatch = useDispatch();

    const selectCategory = (category) => {
        dispatch({
            type: CATEGORY,
            payload: {
                category: category
            }
        })
    };

    const selectMenCategory = () => {
        selectCategory('men');
    };

    const selectWomenCategory = () => {
        selectCategory('women');
    };

    const selectKidsCategory = () => {
        selectCategory('kids');
    };

    const selectSaleCategory = () => {
        selectCategory('');
    };

    return (<section className={cx(styles.menu, styles._gray)}>
            <label className={cx(styles.burger, styles._label)}>
                <span></span>
            </label>
            <div className={cx(styles.holder, styles._frame)}>
                <div className={cx(styles.button, styles._center)} onClick={selectMenCategory}>
                    <span className={styles.__title}>Мужские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={selectWomenCategory}>
                    <span className={styles.__title}>Женские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={selectKidsCategory}>
                    <span className={styles.__title}>Детские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={selectSaleCategory}>
                    <span className={styles.__title}>Распродажа</span>
                </div>
            </div>
        </section>
    )
}

export default Menu
