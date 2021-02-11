import React from 'react'
import ReactDOM from 'react-dom'
import {products} from "./data/products.data";
import Product from "./components/product.card/product.card.component";
import Banner from "./components/banner/banner.component";
import CardList from "./components/card.list/card.list.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import styles from "./styles.module.css";

const root = document.getElementById('root');

const App = () => {
    return <React.Fragment>
        <Header/>
        <main className={styles.main}>
            <Banner/>
            <Menu/>
            <CardList>
                {products.map(product =>
                    <Product
                        key={product.id}
                        img={product.img}
                        sex={product.sex}
                        name={product.name}
                        price={product.price}
                    />
                )}
            </CardList>
        </main>
        <Footer/>
    </React.Fragment>
}

ReactDOM.render(<App/>, root)
