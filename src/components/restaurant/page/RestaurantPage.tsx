import {FunctionComponent, useState} from 'react';
import {Restaurant, restaurants} from "../../../constants/mock.ts";
import RestaurantTabs from "../restaurantsTabs/RestaurantTabs.tsx";
import SelectedRestaurant from "../selectedRestaurant/SelectedRestaurant.tsx";


type Props = {}

const RestaurantPage: FunctionComponent<Props> = () => {
  const [restaurantToRender, setRestaurantToRender] = useState<Restaurant | null>(null)

  const handleRestaurantClick = (selectedRestaurant: Restaurant) => {
    setRestaurantToRender(selectedRestaurant);
  };

  return (
    <div>
      <RestaurantTabs restaurants={restaurants} onClick={handleRestaurantClick}/>
      <SelectedRestaurant selectedRestaurant={restaurantToRender}/>
    </div>
  );
};

export default RestaurantPage;
