import {FunctionComponent, useState} from 'react';
import styles from './header.module.scss'
import Button from "../../utils/button/Button.tsx";
import LoginModal from "./login/LoginModal.tsx";
import {useAuth} from "../../contexts/Auth.tsx";
import CartButtonContainer from "../cart/CartButtonContainer.tsx";

type Props = {};

const Header: FunctionComponent<Props> = () => {
  const {user, logout} = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false)
  return (
    <header className={styles.header}>
     <div className={styles.headerItems}>
      <p className={styles.title}>All restaurants</p>
      {user ? (
        <>
          <p>{user.name}</p>
          <Button className={styles.headerBtn} children={'Log Out'} onClick={logout}/>
        </>) : (
        <>
          <Button className={styles.headerBtn} children={'Log In'} onClick={() => setShowLoginModal(true)}/>
          {showLoginModal &&
              <LoginModal setShowModal={setShowLoginModal}/>}
        </>
      )}
       <CartButtonContainer />
    </div>
  </header>);
};

export default Header;
