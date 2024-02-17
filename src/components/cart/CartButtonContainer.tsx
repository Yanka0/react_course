import  { FunctionComponent } from 'react';
import {useSelector} from "react-redux";
import {selectDishAmount} from "../../store/ui/cart";
import CartButton from "./CartButton.tsx";

interface OwnProps {}

type Props = OwnProps;

const CartButtonContainer: FunctionComponent<Props> = () => {
  const amount = useSelector(selectDishAmount)
  console.log(amount)
  return (<CartButton amount={amount}/>);
};

export default CartButtonContainer;
