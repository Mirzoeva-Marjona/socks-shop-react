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

const root = document.getElementById('root');

class App extends Component {
    state = {
        count: totalCount(),
        basketOpened: false
    }

    render() {
        return <React.Fragment>
            <Header count={this.state.count} openBasket={this.setOpenBasket}/>
            <main className={styles.main}>
                <Banner/>
                <Menu/>
                <CardList updateCount={this.updateCount}/>
            </main>
            {this.state.basketOpened && <Overlay/>}
            {this.state.basketOpened && <Basket closeBasket={this.setOpenBasket} updateCount={this.updateCount}/>}
            <Footer/>
        </React.Fragment>
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
}

ReactDOM.render(<App/>, root)
