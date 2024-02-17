import  { FunctionComponent } from 'react';
import {selectCartProductIds} from "../../store/ui/cart";
import {useSelector} from "react-redux";
import Cart from "./Cart.tsx";



type Props = {};

const CartContainer: FunctionComponent<Props> = () => {
 const menuIds = useSelector(selectCartProductIds)
 console.log(menuIds)
  return <Cart menuIds ={menuIds}/>;
};

export default CartContainer;
