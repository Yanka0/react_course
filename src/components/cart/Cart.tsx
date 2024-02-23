import {FunctionComponent} from 'react';
import DishMenuItem from "../restaurant/menuItem/DishMenuItem.tsx";
import {selectCartProductIdsWithNames} from "../../store/ui/cart";
import {useSelector} from "react-redux";

type Props = {};

const Cart: FunctionComponent<Props> = () => {
  const menuIdsWithNames = useSelector(selectCartProductIdsWithNames)

  return (
    <div>
      {menuIdsWithNames?.length ?
        menuIdsWithNames.map(menuIdWithName =>
          <DishMenuItem id={menuIdWithName.menuId} name={menuIdWithName.name}/>
        )
        :
        'Empty'
      }
    </div>);
};

export default Cart;
