import {FunctionComponent, useState} from 'react';
import RestaurantTabs from "../restaurantsTabs/RestaurantTabs.tsx";
import SelectedRestaurant from "../selectedRestaurant/SelectedRestaurant.tsx";

type Props = {}

const RestaurantPage: FunctionComponent<Props> = () => {
  const [restaurantIdToRender, setRestaurantIdToRender] = useState<string | null>(null)

  const handleRestaurantClick = (restaurantIdToRender: string) => {
    setRestaurantIdToRender(restaurantIdToRender);
  };

  return (
    <div>
      <RestaurantTabs onClick={handleRestaurantClick}/>
      <SelectedRestaurant restaurantIdToRender={restaurantIdToRender}/>
    </div>
  );
};

export default RestaurantPage;
