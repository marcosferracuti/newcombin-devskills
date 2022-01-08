import styles from './Footer.module.css';


export const Footer = () => {
    return (
        <footer className={styles.container}>
            <p className={styles.item}>
                Copyright
            </p>
            <p className={styles.item}>
                All rights reserved
            </p>
        </footer>
    )
}