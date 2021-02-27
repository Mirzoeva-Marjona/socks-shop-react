import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Banner from "./components/banner/banner.component";
import CardList from "./components/card.list/card.list.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import styles from "./styles.module.css";
import {totalCount} from "./service/product.serveice";
import Basket from "./components/basket/basket.component";
import Overlay from "./components/overlay/overlay.component";
import ProductDetails from "./components/product.details/product.details.component";
import Profile from "./components/profile/profile.component";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const root = document.getElementById('root');

class App extends Component {
    state = {
        count: totalCount(),
        basketOpened: false,
        sex: 'men'
    }

    render() {
        return <Router>
            <Header count={this.state.count} openBasket={this.setOpenBasket}/>
            <main className={styles.main}>
                <Banner/>
                <Switch>
                    <Route path={"/"} exact={true}>
                        <Menu selectCategory={this.selectCategory}/>
                        <CardList updateCount={this.updateCount} category={this.state.sex}/>
                    </Route>
                    <Route path={"/profile"} exact={true}>
                        <Profile/>
                    </Route>
                    <Route path={"/product/:id"} exact={true}>
                        <ProductDetails updateCount={this.updateCount}/>
                    </Route>
                    <Route>Страница не найдена</Route>
                </Switch>
            </main>
            {this.state.basketOpened && <Overlay/>}
            {this.state.basketOpened && <Basket closeBasket={this.setOpenBasket} updateCount={this.updateCount}/>}
            <Footer/>
        </Router>
    }

    setOpenBasket = (value) => {
        this.setState({
            basketOpened: value
        })
    }

    updateCount = () => {
        this.setState({
            count: totalCount()
        })
    }

    selectCategory = (sex) => {
        console.log('index ', sex);
        this.setState({
            sex: sex
        })
    }
}

ReactDOM.render(<App/>, root)
