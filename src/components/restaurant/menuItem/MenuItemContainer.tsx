import MenuItem from "./MenuItem.tsx";
import {FunctionComponent} from "react";
type Props = {
  menuIds:string[]
}
const MenuItemContainer: FunctionComponent<Props> = ({ menuIds }) => {
  return (
    <div>
      {menuIds.map((menuId) => (
        <MenuItem key={menuId} menuId={menuId} />
      ))}
    </div>
  );
};
export default MenuItemContainer