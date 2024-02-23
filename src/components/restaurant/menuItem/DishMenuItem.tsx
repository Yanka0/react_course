import  { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart, selectDishAmountById} from "../../../store/ui/cart";
import Button from "../../../utils/button/Button.tsx";
import styles from './menuItem.module.scss'
import {RootState} from "../../../store";

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
        <li className={styles.menuList}>{name}</li>
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
