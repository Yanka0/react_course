import {FunctionComponent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {DishMenu, getDishById} from "../../../store/entities/dish/thunks/get-dish-by-id.ts";
import { selectDishAmountById} from "../../../store/ui/cart";
import {selectRestaurantMenuById} from "../../../store/entities/restaurant/selector.tsx";
import MenuItem from "./MenuItem.tsx";

type Props = {
  restaurantId: string;
};

const MenuItemContainer: FunctionComponent<Props> = ({restaurantId}) => {
  const dishesIds = useSelector(selectRestaurantMenuById(restaurantId));
  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state: RootState) => requestId && selectIsLoading(state, requestId)
  ) ?? true;
  const dispatch: ThunkDispatch<DishMenu, void, UnknownAction> = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getDishById(restaurantId)).requestId)
  }, [dispatch, restaurantId])

  const amount = useSelector((state: RootState) =>
    selectDishAmountById(state, restaurantId)
  )

  console.log('out')
  console.log(isLoading)

  return (<div>
    {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            {dishesIds.map((dishesId) => (
              <MenuItem menuId={dishesId} amount={amount}/>
            ))}
          </div>
        </>
      )}
  </div>);
};

export default MenuItemContainer;
