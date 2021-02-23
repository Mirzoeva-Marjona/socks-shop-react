import React, {Component} from 'react'
import {products} from "../../data/products.data";
import Product from "../product.card/product.card.component";
import Loader from "../loader/loader.component";
import styles from './card.list.module.css'
import cx from 'classname'

function loadProducts() {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(products),
            3000
        )
    })
}

class CardList extends Component {

    state = {
        products: [],
        loading: true,
        filteredProducts: [],
        category: ''
    };

    async componentDidMount() {
        const products = await loadProducts()
        this.setState({
            products: products,
            loading: false,
            filteredProducts: products
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps)
        console.log(this.props)
        if (prevProps != this.props) {
            this.setState((state, props) => ({
                category: this.props.category,
                filteredProducts: products.filter((product) => {
                    return this.props.category === '' ? true : product.sex === this.props.category;
                })
            }));
        }
    }

    render() {
        const {filteredProducts, loading} = this.state

        return (
            <div className={cx(styles._frame, styles.container)}>
                {loading ? (
                    <Loader/>
                ) : (
                    <>
                        {filteredProducts.map(product =>
                            <Product
                                key={product.id}
                                id={product.id}
                                img={product.img}
                                sex={product.sex}
                                name={product.name}
                                price={product.price}
                                updateCount={this.props.updateCount}
                            />
                        )}
                    </>
                )
                }
            </div>
        )
    }
}

export default CardList
