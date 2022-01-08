import styles from './MemberForm.module.css';
import { useState } from 'react';
import { createMember } from '../../api/api';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/membersSlice';


export const MemberForm = () => {

    const dispatch = useDispatch();

    const initialState = {
        firstName: {
            valid: false,
            message: null,
            value: ''
        },
        lastName: {
            valid: false,
            message: null,
            value: ''
        },
        address: {
            valid: false,
            message: null,
            value: ''
        },
        ssn: {
            valid: false,
            message: null,
            value: ''
        }
    }
    const [data, setData] = useState(initialState)


    const validate = () => {
        console.log('validating...')
    }

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
        validate()
    }

    const onReset = (e) => {
        e.preventDefault();
        setData(initialState)
    }

    const onSave = async (e) => {
        e.preventDefault();
        const newUser = {
            firstName: data.firstName.value,
            lastName: data.lastName.value,
            address: data.address.value,
            ssn: data.ssn.value
        }
        const res = await createMember(newUser)
        dispatch(add(newUser))
        console.log(res)
    }

    return (
        <form className={styles.form}>
            <label className={styles.label} htmlFor="firstName">
                First Name
                <input className={styles.input} id="firstName" type="text" name="firstName" 
                    value={data.firstName.value || ''} onChange={handleChange}
                />
            </label>
            <label className={styles.label} htmlFor="lastName">
                Last Name
                <input className={styles.input} id="lastName" type="text" name="lastName"
                    value={data.lastName.value || ''} onChange={handleChange}
                />
            </label>
            <label className={styles.label} htmlFor="address">
                Address
                <input className={styles.input} id="address" type="text" name="address"
                    value={data.address.value || ''} onChange={handleChange}
                />
            </label>
            <label className={styles.label} htmlFor="ssn">
                SSN
                <input className={styles.input} id="ssn" type="text" name="ssn"
                    value={data.ssn.value || ''} onChange={handleChange}
                />
            </label>
            <div className={styles.buttonsContainer}>
                <button onClick={onReset} className={styles.button}>Reset</button>
                <button onClick={onSave} className={styles.button}>Save</button>
            </div>
        </form>
    )
}