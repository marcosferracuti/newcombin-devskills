import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className={`${styles.barContainer}`}>
            <ul className={`${styles.barList}`}>
              <li className={`${styles.barItem}`}>
                <Link to='/'>Home</Link>
              </li>
              <li className={`${styles.barItem}`}>
                <Link to='other'>Other</Link>
              </li>
            </ul>
        </nav>
    )
}