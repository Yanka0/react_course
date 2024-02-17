import {FunctionComponent, useEffect, useState} from 'react';
import styles from "./menuItem.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishMenuWithIds} from "../../../store/entities/dish/selector.tsx";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {DishMenu, getDishes} from "../../../store/entities/dish/thunks/get-dishes.ts";
import {addToCart, removeFromCart, selectDishAmountById} from "../../../store/ui/cart";

type Props = {
  menuId: string
};

const MenuItem: FunctionComponent<Props> = ({menuId}) => {
  const dishMenuWithIds = useSelector(selectDishMenuWithIds);
  const isDishMenuWithIdsNotExist : boolean = !Object.keys(dishMenuWithIds).length;

  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state: RootState) => isDishMenuWithIdsNotExist && requestId && selectIsLoading(state, requestId)
  ) ?? true
  const dispatch: ThunkDispatch<DishMenu, void, UnknownAction> = useDispatch();
  const dispatchCart = useDispatch();
  useEffect(() => {
    if (isDishMenuWithIdsNotExist) {
      setRequestId(dispatch(getDishes()).requestId)
    }
  }, [dispatch])

 const amount = useSelector((state:RootState)=>
 selectDishAmountById(state ,menuId))
  console.log(amount)

  return (<div>
    {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
            <div key={menuId}>
              <div className={styles.menuBtns}>
                <li className={styles.menuList}>{dishMenuWithIds[menuId].name}</li>
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
        </>
      )}
  </div>);
};

export default MenuItem;
