import React from 'react'
import styles from './menu.module.css'
import cx from 'classname'

const Menu = () => {
    return <section className={cx(styles.menu,styles._gray)}>
        <label className={cx(styles.burger,styles._label)} >
            <span></span>
        </label>
        <div className={cx(styles.holder,styles._frame)}>
            <div className={cx(styles.button,styles._center)}>
                <span className={styles.__title}>Мужские</span>
            </div>
            <div className={cx(styles.button,styles._center)}>
                <span className={styles.__title}>Женские</span>
            </div>
            <div className={cx(styles.button,styles._center)}>
                <span className={styles.__title}>Детские</span>
            </div>
            <div className={cx(styles.button,styles._center)}>
                <span className={styles.__title}>Распродажа</span>
            </div>
        </div>
    </section>
}

export default Menu
