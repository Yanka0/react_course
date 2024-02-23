import {FunctionComponent, useState} from 'react';
import RestaurantTabs from "../restaurantsTabs/RestaurantTabs.tsx";
import SelectedRestaurant from "../selectedRestaurant/SelectedRestaurant.tsx";
import Layout from "../../layout/Layout.tsx";
import {useGetRestaurantsQuery} from "../../../store/services/api.ts";

type Props = {}

const RestaurantPage: FunctionComponent<Props> = () => {
  const [restaurantIdToRender, setRestaurantIdToRender] = useState<string | null>(null)
  const { isLoading} = useGetRestaurantsQuery()
  const handleRestaurantClick = (restaurantIdToRender: string) => {
    setRestaurantIdToRender(restaurantIdToRender);
  };
  return (
    <Layout>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <RestaurantTabs onClick={handleRestaurantClick}/>
            <SelectedRestaurant restaurantIdToRender={restaurantIdToRender}/>
          </>
        )}
    </Layout>
  );
};

export default RestaurantPage;
