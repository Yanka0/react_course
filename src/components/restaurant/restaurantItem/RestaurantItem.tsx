import {FunctionComponent} from 'react';
import {Restaurant} from "../../../constants/mock.ts";
import MenuItem from "../menuItem/MenuItem.tsx";
import ReviewItem from "../reviewItem/ReviewItem.tsx";
import styles from './restaurantItem.module.scss'
import Form from "../../form/Form.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";

type Props = {
  restaurant: Restaurant;
}

const RestaurantItem: FunctionComponent<Props> = ({restaurant}) => {
  const {user} = useAuth();
  return (<div>
    <div className={styles.restaurant_item}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <MenuItem menu={restaurant.menu}/>
      <h3>Reviews</h3>
       <ReviewItem reviews={restaurant.reviews}/>
    </div>
    {user && <Form/>}
  </div>)
};

export default RestaurantItem;
