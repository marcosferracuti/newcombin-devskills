import styles from './App.module.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Other } from './pages/Other/Other';
import { NotFound } from './pages/NotFound/NotFound';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { Login } from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reset } from './redux/authSlice';


function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login")
    }
    else {
      navigate("/")
    }
  }, [isLoggedIn])

  const resetLogin = dispatch(reset());

  return (
      <div className={`${styles.container}`}>
          {isLoggedIn && <NavBar/>}
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='other' element={<Other/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          {isLoggedIn && <Footer/>}
      </div>
    );
}

export default App;
