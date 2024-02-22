import {FunctionComponent} from 'react';
import ReviewContainer from "../reviews/ReviewContainer.tsx";
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
        <MenuItemContainer restaurantId= {restaurantId}/>
        <h3>Reviews</h3>
        <ReviewContainer restaurantId={restaurantId}/>
      </div>
      {user && <Form/>}
    </div>)
};

export default RestaurantItem;
