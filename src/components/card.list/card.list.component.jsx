import React, {Component} from 'react'
import styles from './card.list.module.css'
import cx from 'classname'
import {products} from "../../data/products.data";

function loadProducts () {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            3000
        )
    })
}

class CardList extends Component {


    render () {
        return <section className={cx(styles._frame, styles.container)}>
            {this.props.children}
        </section>
    }
}

export default CardList
