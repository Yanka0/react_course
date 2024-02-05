import {FunctionComponent, useState} from 'react';
import {Menu} from "../../../constants/mock.ts";
import styles from "./menuItem.module.scss";
import Button from "../../../utils/button/Button.tsx";


type Props = {
  menu: Menu[];
};

const MenuItem: FunctionComponent<Props> = ({menu}) => {
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

  return (<div>
    {menu.map((item: Menu) => (
      <div key={item.id}>
        <div className={styles.menuBtns}>
          <li className={styles.menuList}>{item.name}</li>
          <div>
            <Button children={'+'} onClick={() => valuePlus(item.id)} className={styles.menuBtn}
                    isDisabled={isPlusDisabled(item.id)}/>
            {counter[item.id] || 0}
            <Button children={'-'} onClick={() => valueMinus(item.id)} className={styles.menuBtn}
                    isDisabled={isMinusDisabled(item.id)}/>
          </div>
        </div>
      </div>))}
  </div>);
};

export default MenuItem;
