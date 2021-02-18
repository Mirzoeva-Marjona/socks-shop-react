import React, {Component} from 'react'
import styles from './banner.module.css'
import cx from 'classname'

class Banner extends Component {
    render () {
        return <figure className={cx(styles.banner, styles._frame)}>
            <img className={styles.banner__img} src="image/photo.png" alt="Image not found"/>
        </figure>
    }
}

    export default Banner
