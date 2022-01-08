import styles from './MemberForm.module.css';
import { useState } from 'react';
import { createMember } from '../../api/api';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/membersSlice';
import { ssnValidator } from '../../utils/validators';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const MemberForm = () => {

    const dispatch = useDispatch();
    const members = useSelector(state => state.members)
    const initialState = {
        firstName: '',
        lastName: '',
        address: '',
        ssn: '',
    }
    const [data, setData] = useState(initialState)
    const [formValidation, setFormValidation] = useState({
        formIsValid: false,
        firstName: false,
        lastName: false,
        address: false,
        ssn: false
    })

    const validate = () => {
        const newFormValidation = {
            firstName: data.firstName != '',
            lastName: data.lastName !== '',
            address: data.address !== '',
            ssn: ssnValidator(data.ssn),
            formIsValid: false
        }
        const fieldsAreValid = (
            newFormValidation.firstName &&
            newFormValidation.lastName &&
            newFormValidation.address && 
            newFormValidation.ssn
        )
        if (!fieldsAreValid) {
            newFormValidation.formIsValid = false;
            setFormValidation(newFormValidation);
            return
        }
        let isUnique = true;

        for (let el of members) {
            if (el.ssn === data.ssn){
                isUnique = false;
                break;
            }
        }

        newFormValidation.formIsValid = isUnique;
        setFormValidation(newFormValidation)        
    }

    useEffect(() => {
        validate();
    }, [data])

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [field]: value.trim()
        })
    }

    const onReset = (e) => {
        e.preventDefault();
        setData(initialState)
    }

    const onSave = async (e) => {
        e.preventDefault();
        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            ssn: data.ssn
        }
        const res = await createMember(newUser)
        if (res.success) {
            dispatch(add(res.data))
            setData(initialState)
        }
        
    }

    return (
        <form className={styles.form}>
            <label className={`${styles.label }  ${!formValidation.firstName ? styles.error: ""}`} 
             htmlFor="firstName">
                First Name
                <input className={`${styles.input}`}
                    id="firstName" type="text" name="firstName" 
                    value={data.firstName || ''} onInput={handleChange}
                />
            </label>
            <label className={`${styles.label }  ${!formValidation.lastName ? styles.error: ""}`}
                htmlFor="lastName">
                Last Name
                <input className={styles.input} id="lastName" type="text" name="lastName"
                    value={data.lastName || ''} onInput={handleChange}
                />
            </label>
            <label className={`${styles.label }  ${!formValidation.address ? styles.error: ""}`}
            htmlFor="address">
                Address
                <input className={styles.input} id="address" type="text" name="address"
                    value={data.address || ''} onInput={handleChange}
                />
            </label>
            <label className={`${styles.label }  ${!formValidation.ssn ? styles.error: ""}`}
                htmlFor="ssn">
                SSN
                <input className={styles.input} id="ssn" type="text" name="ssn"
                    value={data.ssn || ''} onInput={handleChange}
                />
            </label>
            <div className={styles.buttonsContainer}>
                <button onClick={onReset} className={styles.button}>Reset</button>
                <button onClick={onSave} className={styles.button}
                    disabled={!formValidation.formIsValid}
                >
                    Save
                </button>
            </div>
        </form>
    )
}