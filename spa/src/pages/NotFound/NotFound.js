import styles from './NotFound.module.css';
import Page from '../../components/Page/Page';


export const NotFound = () => {
    return (
        <Page>
            <div className={`${styles.imageContainer}`}>
                <img className={styles.image} src='https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif' alt="lost travolta"/>
            </div>
        </Page>
    )
}