import {FunctionComponent} from 'react';
import {Restaurant} from "../../../constants/mock.ts";
import RestaurantItem from "../restaurantItem/RestaurantItem.tsx";
import styles from './selectedRestaurant.module.scss'

type Props = {
  selectedRestaurant : Restaurant | null
};

const SelectedRestaurant: FunctionComponent<Props> = ({selectedRestaurant}) => {

  return (<div>
    <div className={styles.restaurant_list}>{
      !selectedRestaurant ? (
        <p>Choose restaurant</p>) : (
        <RestaurantItem
          key={selectedRestaurant.id}
          restaurant={selectedRestaurant}
        />
      )}
    </div>

  </div>);
};

export default SelectedRestaurant;
