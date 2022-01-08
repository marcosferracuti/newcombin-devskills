import styles from './Login.module.css';
import Page from "../../components/Page/Page";
import { LoginForm } from '../../components/LoginForm/UserForm/LoginForm';

export const Login = () => {
    return (
        <Page>
            <div className={styles.mainContainer}>
                <LoginForm/>
            </div>
        </Page>
    )
}