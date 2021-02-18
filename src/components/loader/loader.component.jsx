import React, {Component} from 'react';
import styles from '../../styles.module.css'
import stylesBasket from '../basket/basket.module.css'
import stylesLoader from './loader.module.css'
import cx from 'classname';

class Loader extends Component {
    render() {
        return <div className={cx(stylesBasket.modal, styles.hidden)}>
            <div className={cx(stylesLoader.notification, stylesLoader._text)}>
                <span>Загрузка...</span>
            </div>
        </div>
    }
}

export default Loader
