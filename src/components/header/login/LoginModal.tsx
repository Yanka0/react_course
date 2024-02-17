import {FunctionComponent} from 'react';
import Input from "../../../utils/input/Input.tsx";
import useLogInForm from "./useLogInForm.tsx";
import styles from './loginModal.module.scss'
import Button from "../../../utils/button/Button.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";
import {createPortal} from "react-dom";


type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal: FunctionComponent<Props> = ({setShowModal}) => {
  const modal = document.getElementById('overlays')!
  const {form, setName, setEmail} = useLogInForm()
  const {login} = useAuth();
  const handleContinueClick = () => {
    if (form.name !== '' && form.email !== '') {
      login({name: form.name, email: form.email});
      setShowModal(false);
    }
  };

  return createPortal(
    <div className={styles.container}>
      <div className={styles.loginModal}>
        <p className="title">Log In</p>
        <div className={styles.allInputs}>
          <Input htmlFor={'name'} id={'name'} label={'Name'} value={form.name} onChange={setName} type="text"
                 className={styles.inputItem}/>
          <Input htmlFor={'email'} id={'email'} label={'Email'} value={form.email} onChange={setEmail} type="text"
                 className={styles.inputItem}/>
        </div>
        <div className={styles.allBtns}>
          <Button className={styles.loginModalBtn} children={'Continue'} onClick={handleContinueClick}/>
          <Button className={styles.loginModalBtn} children={'Cancel'} onClick={() => setShowModal(false)}/>
        </div>
      </div>
    </div>,
    modal
  );
};

export default LoginModal;
