import {FunctionComponent, useState} from 'react';
import {createPortal} from "react-dom";
import Cart from "./Cart.tsx";
// @ts-ignore
import cartImg from "../../img/cart_icon.svg";
import styles from './cart.module.scss'
import {selectDishAmount} from "../../store/ui/cart";
import {useSelector} from "react-redux";

type Props = {
  className?:string
};

const CartButton: FunctionComponent<Props> = ({ className}) => {
  const [isVisible, setIsVisible] = useState(false)
  const modal = document.getElementById('overlays')!
  const amount = useSelector(selectDishAmount)
  return (
    <div className={`${styles.cartIcon} ${className}`}>
      <img alt ='cart' src ={cartImg} width="40" height="40" onClick={() => setIsVisible(!isVisible)}/>
      <p className={styles.cartNumber}>{amount}</p>
      {isVisible &&
        createPortal(
          <div>
            <Cart/>
          </div>
          , modal)}
    </div>
  )
};

export default CartButton;
