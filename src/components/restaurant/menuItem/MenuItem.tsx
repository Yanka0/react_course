import {FunctionComponent, useState} from 'react';
import styles from "./menuItem.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useSelector} from "react-redux";
import {selectDishMenuWithIds} from "../../../store/entities/dish/selector.tsx";


type Props = {
  menuIds : string[]
};

const MenuItem: FunctionComponent<Props> = ({menuIds}) => {
  const [counter, setCounter] = useState<{ [key: string]: number }>({});

  function valuePlus(menuItemId: string) {
    setCounter((prevCounter) => ({
      ...prevCounter,
      [menuItemId]: Math.min((prevCounter[menuItemId] || 0) + 1, 5),
    }))
  }

  function valueMinus(menuItemId: string) {
    setCounter((prevCounter) => ({
      ...prevCounter,
      [menuItemId]: Math.max((prevCounter[menuItemId] || 0) - 1, 0),
    }));
  }

  function isMinusDisabled(menuItemId: string): boolean {
    return counter[menuItemId] === 0;
  }

  function isPlusDisabled(menuItemId: string): boolean {
    return counter[menuItemId] === 5;
  }

  const dishMenuWithIds = useSelector(selectDishMenuWithIds);
  return (<div>
    {menuIds.map((id) => (
      <div key={id}>
        <div className={styles.menuBtns}>
          <li className={styles.menuList}>{dishMenuWithIds[id].name}</li>
          <div>
            <Button children={'+'} onClick={() => valuePlus(id)} className={styles.menuBtn}
                    isDisabled={isPlusDisabled(id)}/>
            {counter[id] || 0}
            <Button children={'-'} onClick={() => valueMinus(id)} className={styles.menuBtn}
                    isDisabled={isMinusDisabled(id)}/>
          </div>
        </div>
      </div>))}
  </div>);
};

export default MenuItem;
