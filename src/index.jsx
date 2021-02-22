import React from 'react';
import ReactDOM from 'react-dom';
import Banner from "./components/banner/banner.component";
import CardList from "./components/card.list/card.list.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import styles from "./styles.module.css";
import Basket from "./components/basket/basket.component";

const root = document.getElementById('root');

const App = () => {
    return <React.Fragment>
        <Header/>
        <main className={styles.main}>
            <Banner/>
            <Menu/>
            <CardList/>
        </main>
        <Basket/>
        <Footer/>
    </React.Fragment>
}

ReactDOM.render(<App/>, root)
