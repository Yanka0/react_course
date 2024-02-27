import  { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart, selectDishAmountById} from "../../../store/ui/cart";
import Button from "../../../utils/button/Button.tsx";
import styles from './menuItem.module.scss'
import {RootState} from "../../../store";
import {NavLink} from "react-router-dom";

type Props = {
  id: string;
  name: string;
};

const DishMenuItem: FunctionComponent<Props> = ({ id, name}) => {
  const amount = useSelector((state: RootState) =>
    selectDishAmountById(state, id)
  )

  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.menuBtns}>
        <NavLink to={`/dish/${id}`} className={styles.menuList}>{name}</NavLink>
        <div>
          <Button children={'+'} onClick={() => dispatch(addToCart({id, name}))} className={styles.menuBtn}/>
          {amount}
          <Button children={'-'} onClick={() => dispatch(removeFromCart(id))} className={styles.menuBtn}/>
        </div>
      </div>
    </div>
  );
};

export default DishMenuItem;
