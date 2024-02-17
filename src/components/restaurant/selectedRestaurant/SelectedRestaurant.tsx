import {FunctionComponent} from 'react';
import RestaurantItem from "../restaurantItem/RestaurantItem.tsx";
import styles from './selectedRestaurant.module.scss'

type Props = {
  restaurantIdToRender: string | null
};

const SelectedRestaurant: FunctionComponent<Props> = ({restaurantIdToRender}) => {

  return (<div>
    <div className={styles.restaurant_list}>{
      restaurantIdToRender ? (
          <RestaurantItem restaurantId={restaurantIdToRender}/>
        )
        : (
          <p>Choose restaurant</p>
        )}
    </div>

  </div>);
};

export default SelectedRestaurant;
