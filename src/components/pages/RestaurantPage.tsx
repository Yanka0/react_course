import {FunctionComponent} from 'react';
import RestaurantTabs from "../restaurant/restaurantsTabs/RestaurantTabs.tsx";
import {useGetRestaurantsQuery} from "../../store/services/api.ts";
import {Outlet} from "react-router-dom";

type Props = {}

const RestaurantPage: FunctionComponent<Props> = () => {
  const {isLoading} = useGetRestaurantsQuery()
  return (
    <>
      {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <RestaurantTabs/>
          <Outlet/>
        </>
      )}
    </>
  );
};

export default RestaurantPage;
