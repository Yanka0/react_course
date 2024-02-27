import {FunctionComponent} from 'react';
import styles from './restaurantItem.module.scss'
import Form from "../../form/Form.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";
import {useGetRestaurantsQuery} from "../../../store/services/api.ts";
import {Outlet, useParams} from "react-router-dom";
import RestaurantItemTabs from "../../../restaurantItemTabs/RestaurantItemTabs.tsx";

type Props = {
}

const RestaurantItem: FunctionComponent<Props> = () => {
  const {user} = useAuth();
  const {restaurantId} = useParams()
  const {data:restaurant} = useGetRestaurantsQuery(undefined,{
    selectFromResult :(result) => ({
      ...result,
      data: result?.data?.find(({id}) => restaurantId === id)
    })
  });
  if (!restaurant || !restaurantId){
    return null
  }

  return (
    <div key={restaurantId}>
      <div className={styles.restaurant_item}>
        <h2>{restaurant.name}</h2>
        <RestaurantItemTabs/>
        <Outlet/>
      </div>
      {user && <Form restaurantId={restaurantId}/>}
    </div>)
};

export default RestaurantItem;
