import React, {Component} from 'react'
import styles from './menu.module.css'
import cx from 'classname'

class Menu extends Component {
    render() {
        return <section className={cx(styles.menu, styles._gray)}>
            <label className={cx(styles.burger, styles._label)}>
                <span></span>
            </label>
            <div className={cx(styles.holder, styles._frame)}>
                <div className={cx(styles.button, styles._center)} onClick={this.selectMenCategory}>
                    <span className={styles.__title}>Мужские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={this.selectWomenCategory}>
                    <span className={styles.__title}>Женские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={this.selectKidsCategory}>
                    <span className={styles.__title}>Детские</span>
                </div>
                <div className={cx(styles.button, styles._center)} onClick={this.selectSaleCategory}>
                    <span className={styles.__title}>Распродажа</span>
                </div>
            </div>
        </section>
    }

    selectMenCategory = () => {
        this.props.selectCategory('men');
    }

    selectWomenCategory = () => {
        this.props.selectCategory('women');
    }

    selectKidsCategory = () => {
        this.props.selectCategory('kids');
    }

    selectSaleCategory = () => {
        this.props.selectCategory('');
    }
}

export default Menu
