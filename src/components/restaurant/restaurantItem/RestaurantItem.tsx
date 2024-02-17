import {FunctionComponent} from 'react';
import ReviewItem from "../reviewItem/ReviewItem.tsx";
import styles from './restaurantItem.module.scss'
import Form from "../../form/Form.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../../store/entities/restaurant/selector.tsx";
import MenuItemContainer from "../menuItem/MenuItemContainer.tsx";

type Props = {
  restaurantId: string;
}

const RestaurantItem: FunctionComponent<Props> = ({restaurantId}) => {
  const {user} = useAuth();
  const restaurant = useSelector(selectRestaurantById(restaurantId))

  return (
    <div key={restaurantId}>
      <div className={styles.restaurant_item}>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <MenuItemContainer menuIds= {restaurant.menu}/>
        <h3>Reviews</h3>
        <ReviewItem reviewIds={restaurant.reviews}/>
      </div>
      {user && <Form/>}
    </div>)
};

export default RestaurantItem;
