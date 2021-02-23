import React, {Component} from "react";
import Counter from "../../counter/counter.component";
import {getProduct, savePurchases} from "../../../service/product.serveice";
import styles from './basket.row.module.css';
import cx from 'classname';

class BasketRow extends Component {

    state = {
        purchase: {count: 0},
        idSize: '',
        product: {id: 0, img: '', price: 0}
    }

    componentDidMount() {
        this.setState({
            idSize: this.props.idSize,
            purchase: this.props.purchase,
            product: getProduct(this.props.purchase.id)
        })
    }

    render() {
        console.log(this.state);
        console.log(getProduct(this.state.purchase.id));
        let product = this.state.product;
        let count = this.state.purchase.count;
        let size = this.state.purchase.size;
        return <div>
            <div className={cx(styles.product, styles._font)}>
                <div>
                    <img className={styles.__image} src={product.img} alt="Изображение не найдено"/>
                </div>
                <div>{product.name}</div>
                <div>{size}</div>
                <Counter value={count} countUpdated={this.purchaseUpdated}/>
            <div>{product.price * count + ' руб.'}</div>
                <div onClick={this.remove}>
            <svg className={styles.__remove} width="30" height="30" viewBox="0 0 30 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 27.5H8.75C7.36929 27.5 6.25 26.3807 6.25 25V8.75H3.75V6.25H8.75V5C8.75 3.61929 9.86929 2.5 11.25 2.5H18.75C20.1307 2.5 21.25 3.61929 21.25 5V6.25H26.25V8.75H23.75V25C23.75 26.3807 22.6307 27.5 21.25 27.5ZM8.75 8.75V25H21.25V8.75H8.75ZM11.25 5V6.25H18.75V5H11.25ZM18.75 22.5H16.25V11.25H18.75V22.5ZM13.75 22.5H11.25V11.25H13.75V22.5Z"
                  fill="#333333"/>
        </svg>
    </div>
    </div>
    </div>
    }

    remove = () => {
        this.purchaseUpdated(0);
    }

    purchaseUpdated = (count) => {
        let purchase = {
            ...this.state.purchase,
            count: count
        }

        this.setState({
            purchase: purchase
        });
        this.props.purchaseRowUpdated(this.state.idSize, purchase);
    }
}

export default BasketRow
