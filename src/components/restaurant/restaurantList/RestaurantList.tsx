import  { FunctionComponent } from 'react';
import {restaurants} from "../../../constants/mock.ts";
import RestaurantItem from "../restaurantItem/RestaurantItem.tsx";
import styles from './restaurantList.module.scss'
interface OwnProps {}

type Props = OwnProps;

const RestaurantList: FunctionComponent<Props> = () => {

  return (<div className={styles.restaurant_list}>{
      restaurants.map(restaurant =>
          <RestaurantItem restaurant={restaurant}/>)
  }
  </div>);
};

export default RestaurantList;
