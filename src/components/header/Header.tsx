import {FunctionComponent, useState} from 'react';
import styles from './header.module.scss'
import Button from "../../utils/button/Button.tsx";
import {createPortal} from "react-dom";
import LoginModal from "./login/LoginModal.tsx";
import {useAuth} from "../../contexts/Auth.tsx";

type Props = {};

const Header: FunctionComponent<Props> = () => {
  const modal = document.getElementById('overlays')!
  const {user, logout} = useAuth();
  const [showModal, setShowModal] = useState(false)
  return (<header className={styles.header}>
    <div className={styles.headerItems}>
      <p className={styles.title}>All restaurants</p>
      {user ? (
        <>
          <p>{user.name}</p>
          <Button className={styles.headerBtn} children={'Log Out'} onClick={logout}/>
        </>) : (
        <>
          <Button className={styles.headerBtn} children={'Log In'} onClick={() => setShowModal(true)}/>
          {showModal &&
            createPortal(
              <div>
                <LoginModal setShowModal={setShowModal}/>
              </div>, modal
            )}
        </>
      )}
    </div>
  </header>);
};

export default Header;
