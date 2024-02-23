import  {FunctionComponent, useState} from 'react';
import {createPortal} from "react-dom";
import Button from "../../utils/button/Button.tsx";
import CartContainer from "./CartContainer.tsx";
import styles from './cart.module.scss'


type Props = {
  amount:number
};

const CartButton: FunctionComponent<Props> = ({amount}) => {
  const [isVisible, setIsVisible] = useState(false)
  const modal = document.getElementById('overlays')!
  return (
    <div>
      <Button className={styles.cartBtn} children={amount} onClick={() => setIsVisible(!isVisible)}/>
        { isVisible &&
        createPortal(
      <div>
        <CartContainer/>
      </div>
      , modal)}
    </div>
  )
};

export default CartButton;
