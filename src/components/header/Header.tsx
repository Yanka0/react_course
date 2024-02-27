import {FunctionComponent, useState} from 'react';
import styles from './header.module.scss'
import Button from "../../utils/button/Button.tsx";
import LoginModal from "./login/LoginModal.tsx";
import {useAuth} from "../../contexts/Auth.tsx";
import CartButton from "../cart/CartButton.tsx";
import {Link} from "react-router-dom";

type Props = {};

const Header: FunctionComponent<Props> = () => {
  const {user, logout} = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false)
  return (
    <header className={styles.header}>
     <div className={styles.headerItems}>
      <Link to ='/' className={styles.title}>Delivery</Link>
       <Link to='/restaurants' className={styles.tab}>restaurants</Link>

       {user ? (
        <>
          <p className={styles.userName}>{user.name}</p>
          <Button className={styles.headerBtn} children={'Log Out'} onClick={logout}/>
        </>) : (
        <>
          <Button className={styles.headerBtn} children={'Log In'} onClick={() => setShowLoginModal(true)}/>
          {showLoginModal &&
              <LoginModal setShowModal={setShowLoginModal}/>}
        </>
      )}
       <CartButton className={styles.cartBtn}/>
    </div>
  </header>);
};

export default Header;
