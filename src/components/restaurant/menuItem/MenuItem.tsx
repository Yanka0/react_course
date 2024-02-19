import {FunctionComponent, useEffect, useState} from 'react';
import styles from "./menuItem.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectDishMenuById} from "../../../store/entities/dish/selector.tsx";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {DishMenu, getDishById} from "../../../store/entities/dish/thunks/get-dish-by-id.ts";
import {addToCart, removeFromCart, selectDishAmountById} from "../../../store/ui/cart";

type Props = {
  menuId: string;
};

const MenuItem: FunctionComponent<Props> = ({menuId}) => {
  const dishMenu = useSelector(selectDishMenuById(menuId));
  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state: RootState) => requestId && selectIsLoading(state, requestId)
  ) ?? true;
  const dispatch: ThunkDispatch<DishMenu, void, UnknownAction> = useDispatch();
  const dispatchCart = useDispatch();
  useEffect(() => {
    setRequestId(dispatch(getDishById(menuId)).requestId)
  }, [dispatch, menuId])

  const amount = useSelector((state: RootState) =>
    selectDishAmountById(state, menuId)
  )

  return (<div>
    {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
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
        </>
      )}
  </div>);
};

export default MenuItem;
