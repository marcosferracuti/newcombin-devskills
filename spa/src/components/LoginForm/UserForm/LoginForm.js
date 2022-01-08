import styles from './LoginForm.module.css';
import { useState } from 'react';
import { login } from '../../../api/api';
import { useDispatch } from 'react-redux';
import { set } from '../../../redux/authSlice';


export const LoginForm = () => {
    const initialState = {
        username: {
            valid: false,
            value: 'sarah'
        },
        password: {
            valid: false,
            value: 'connor'
        },
    }
    const [data, setData] = useState(initialState)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [field]: {
                value: value,
                valid: false
            }
        })
    }
    
    const onReset = (e) => {
        e.preventDefault();
    }

    const onLogin = async (e) => {
        e.preventDefault();
        const params = {
            username: data.username.value,
            password: data.password.value
        };
        const res = await login(params);
        if (res.success) {
            dispatch(set(res.data))
        }
    }

    return (
        <form className={styles.form} onChange={handleChange}>
            <label className={styles.label} htmlFor="username">
                Username
                <input className={styles.input} id="username" type="text" name="username"
                    defaultValue={data.username.value}
                />
            </label>
            <label className={styles.label} htmlFor="password">
                Password
                <input className={styles.input} id="password" type="password" name="password"
                    defaultValue={data.password.value}
                />
            </label>
            <div className={styles.buttonsContainer}>
                <button onClick={onLogin} className={styles.button}>Login</button>
            </div>
        </form>
    )
}