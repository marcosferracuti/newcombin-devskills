import styles from './Table.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMembers } from '../../api/api';
import { set } from '../../redux/membersSlice';


export const Table = () => {
    const members = useSelector(state => state.members);
    const dispatch = useDispatch()
    const updateMemers = async () => {
        const res =  await getMembers()
        if (res.success) {
            dispatch(set(res.data))
        }
    }

    useEffect(() => {
        updateMemers();
        setTimeout(updateMemers, 120000)
    }, [])


    return (
        <div className={styles.table}>
            <div className={styles.headers}>
                <div className={styles.row}>
                    <div className={styles.headerItem + ' ' + styles.cell}>
                        First Name
                    </div>
                    <div className={styles.headerItem + ' ' + styles.cell}>
                        Last Name
                    </div>
                    <div className={styles.headerItem + ' ' + styles.cell}>
                        Address
                    </div>
                    <div className={styles.headerItem + ' ' + styles.cell}>
                        SSN
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                {
                    members.map((member, i) => (
                        <div className={styles.row} key={i}>
                            <div className={styles.cell}>
                                { member.firstName }
                            </div>
                            <div className={styles.cell}>
                                { member.lastName }
                            </div>
                            <div className={styles.cell}>
                                { member.address }
                            </div>
                            <div className={styles.cell}>
                                { member.ssn }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}