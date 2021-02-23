import React, {Component} from 'react'
import {addPurchase} from "../../service/product.serveice";
import styles from './product.card.module.css'
import cx from 'classname'

class Product extends Component {
    state = {
        size: "Выберите размер"
    };

    handleChange = (event) => {
        this.setState({size: event.target.value})
    }

    addToBasket = () => {
        if (this.state.size !== "Выберите размер") {
            addPurchase(this.props.id, this.state.size);
            this.props.updateCount();
        }
    }

    render() {
        return <div id="productCard">
            <div className={cx(styles.card, styles._border)}>
                <div className={styles.image}>
                    <img className={styles.__photo} src={this.props.img} alt="Изображение не найдено"/>
                </div>
                <div className={cx(styles.__name, styles._font)}>
                    <span>{this.props.name}</span>
                </div>
                <div className={cx(styles.__price, styles._font)}>
                    <span>{this.props.price}</span>
                    <span>руб.</span>
                </div>
                <div className={styles.size}>
                    <select className={cx(styles.size, styles._text)} onChange={this.handleChange}>
                        <option>Выберите размер</option>
                        <option>39-40</option>
                        <option>41-42</option>
                        <option>43-44</option>
                    </select>
                </div>
                <div className={cx(styles.button, styles._font)} onClick={this.addToBasket}>
                    <span>В корзину</span>
                </div>
            </div>
        </div>
    }
}

export default Product
