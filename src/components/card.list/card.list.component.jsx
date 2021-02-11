import React from 'react'
import styles from './card.list.module.css'
import cx from 'classname'

const CardList = ({children}) => {
    return <section className={cx(styles._frame,styles.container)}>
       {children}
    </section>
}

export default CardList
