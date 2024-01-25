import { FunctionComponent } from 'react';
import ListArray from "../../../utils/listArray/ListArray.tsx";
import {Menu, Restaurant, Review} from "../../../constants/mock.ts";
import styles from './restaurantItem.module.scss'
type Props = {
    restaurant : Restaurant
};

const RestaurantItem: FunctionComponent<Props> = ({ restaurant}) => {

  return (<div className={styles.restaurant_item}>
      <div >
          <h2>{restaurant.name}</h2>
          <h3>Menu</h3>
          <ListArray<Menu>
              data={restaurant.menu}
              mapFunction={(item : Menu) => item.name}
          />
          <h3>Review</h3>
          <ListArray<Review>
              data={restaurant.reviews}
              mapFunction={(item : Review) => item.text}
          />
      </div>
  </div>);
};

export default RestaurantItem;
