import  { FunctionComponent } from 'react';
import MenuItem from "../restaurant/menuItem/MenuItemContainer.tsx";


type Props = {
  menuIds: string[]
};

const Cart: FunctionComponent<Props> = ({menuIds}) => {

  return (<div>
    {menuIds?.length? menuIds.map(menuId => <MenuItem menuId={menuId}/>):
    'Empty'}
  </div>);
};

export default Cart;
