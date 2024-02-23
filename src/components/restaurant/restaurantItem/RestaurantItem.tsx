import {FunctionComponent} from 'react';
import styles from './restaurantItem.module.scss'
import Form from "../../form/Form.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";
import {useGetRestaurantsQuery} from "../../../store/services/api.ts";
import DishMenuList from "../menuItem/DishMenuList.tsx";
import Reviews from "../reviews/Reviews.tsx";

type Props = {
  restaurantId: string;
}

const RestaurantItem: FunctionComponent<Props> = ({restaurantId}) => {
  const {user} = useAuth();

  const {data:restaurant} = useGetRestaurantsQuery(undefined,{
    selectFromResult :(result) => ({
      ...result,
      data: result?.data?.find(({id}) => restaurantId === id)
    })
  });
  if (!restaurant){
    return null
  }

  return (
    <div key={restaurantId}>
      <div className={styles.restaurant_item}>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <DishMenuList restaurantId= {restaurant.id}/>
        <h3>Reviews</h3>
        <Reviews restaurantId={restaurant.id}/>
      </div>
      {user && <Form restaurantId={restaurantId}/>}
    </div>)
};

export default RestaurantItem;
