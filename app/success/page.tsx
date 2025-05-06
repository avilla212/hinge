import React from 'react'
import styles from '../success/success.module.css';

const successPage = () => {
  return (
    <main className={styles.page}>
        <h1 className={styles['cal-sans-regular'] || ''}>
            You didn't have a choice anyways
        </h1>
    </main>
  )
}

export default successPage