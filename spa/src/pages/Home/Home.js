import styles from './Home.module.css';
import Page from "../../components/Page/Page";
import { MemberForm } from '../../components/MemberForm/MemberForm';
import { Table } from '../../components/Table/Table';

export const Home = () => {
    return (
        <Page>
            <h4>Home Page</h4>
            <div className={styles.mainContainer}>
                <MemberForm/>
                <Table/>
            </div>
        </Page>
    )
}