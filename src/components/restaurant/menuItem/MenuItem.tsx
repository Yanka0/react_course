import {FunctionComponent} from "react";
import {selectDishMenuById, selectDishMenuModule} from "../../../store/entities/dish/selector.tsx";
import {useSelector, useDispatch} from "react-redux";
import styles from "./menuItem.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {addToCart, removeFromCart} from "../../../store/ui/cart";
type Props = {
  menuId:string,
  amount:number
}
const MenuItem: FunctionComponent<Props> = ({menuId,amount}) => {
const dishMenu = useSelector(selectDishMenuById(menuId))
  const dishMenuModule = useSelector(selectDishMenuModule)

  const dispatchCart = useDispatch();

console.log('in')
console.log(dishMenuModule)
  return (
    <div>
      <div key={menuId}>
        <div className={styles.menuBtns}>
          <li className={styles.menuList}>{dishMenu.name}</li>
          <div>
            <Button children={'+'} onClick={() => {
              dispatchCart(addToCart(menuId))
            }} className={styles.menuBtn}/>
            {amount}
            <Button children={'-'} onClick={() => {
              dispatchCart(removeFromCart(menuId))
            }} className={styles.menuBtn}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuItem