import {FunctionComponent} from 'react';
import styles from "./restaurantTabs.module.scss";
import {Restaurant} from "../../../constants/mock.ts";
import Button from "../../../utils/button/Button.tsx";


type Props = {
    restaurants: Restaurant[];
    onClick: (selectedRestaurant: Restaurant) => void;
};

const RestaurantTabs: FunctionComponent<Props> = ({restaurants, onClick}) => {

  return (
      <div className={styles.btnContainer}>
      {restaurants.map((item) => (
          <Button key={item.id} onClick={() => onClick(item)} className={styles.restBtn}>
              {item.name}
          </Button>
      ))}
  </div>);
};

export default RestaurantTabs;
