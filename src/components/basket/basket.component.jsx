import React, {Component} from "react";
import Overlay from "../overlay/overlay.component";
import {getPurchases, savePurchases, getProduct, totalCount} from '../../service/product.serveice'
import styles from './basket.module.css';
import cx from 'classname'
import BasketRow from "./basket-row/basket.row.component";

class Basket extends Component {

    state = {
        purchases: new Map()
    }

    componentDidMount() {
        this.setState({
            purchases: getPurchases()
        })
    }

    render() {
        return <div>
            <div className={cx(styles.modal, styles._basket, styles._scroll, styles._hidden)}>
                <div className={styles._content}>
                    <div className={styles.__header}>
                        <div className={cx(styles._title, styles.__font)}>
                            <div>
                                <span>Выбранные товары</span>
                            </div>
                        </div>
                        <div className={styles.__close} onClick={this.closeBasket}>
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
                            Array.from(this.state.purchases.entries()).map(([idSize, purchase]) => {
                                console.log(idSize);
                                console.log(purchase);
                                return <BasketRow key={idSize}
                                                  idSize={idSize}
                                                  purchase={purchase}
                                                  purchaseRowUpdated={this.basketUpdated}
                                />
                            })
                        }
                    </div>
                    <div className={cx(styles.__total, styles._font)}>
                        <span>{this.total() + ' руб.'}</span>
                    </div>
                </div>
            </div>
        </div>
    }

    basketUpdated = (idSize, purchase) => {
        let purchases = this.state.purchases;
        if (purchase.count == 0) {
            purchases.delete(idSize)
        } else {
            purchases.set(idSize, purchase)
        }
        this.setState({
                purchases: purchases
            }
        );
        savePurchases(purchases);
        this.props.updateCount();
    }


    total() {
        let total = 0;
        this.state.purchases.forEach(value => {
            total += value.count * getProduct(value.id).price
        });
        console.log(total);
        return total;
    }

    closeBasket = () => {
        this.props.closeBasket(false);
    }
}

export default Basket
