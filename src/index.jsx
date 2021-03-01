import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from "./components/banner/banner.component";
import CardList from "./components/card.list/card.list.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import styles from "./styles.module.css";
import Basket from "./components/basket/basket.component";
import Overlay from "./components/overlay/overlay.component";
import ProductDetails from "./components/product.details/product.details.component";
import Profile from "./components/profile/profile.component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider, useSelector} from "react-redux";
import store from "./service/store";

const root = document.getElementById('root');

function App() {
    const isOpenBasket = useSelector((store) => {
        return store.common.isOpenBasket
    });

        return (
            <Router>
                <Header/>
                <main className={styles.main}>
                    <Banner/>
                    <Switch>
                        <Route path={"/"} exact={true}>
                            <Menu/>
                            <CardList/>
                        </Route>
                        <Route path={"/profile"} exact={true}>
                            <Profile/>
                        </Route>
                        <Route path={"/product/:id"} exact={true}>
                            <ProductDetails/>
                        </Route>
                        <Route>Страница не найдена</Route>
                    </Switch>
                </main>
                {isOpenBasket && <Overlay/>}
                {isOpenBasket && <Basket/>}
                <Footer/>
            </Router>
        )
}

ReactDOM.render(<Provider store={store}><App/></Provider>, root)
