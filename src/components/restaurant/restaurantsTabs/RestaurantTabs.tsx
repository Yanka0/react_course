import {FunctionComponent} from 'react';
import styles from "./restaurantTabs.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useGetRestaurantsQuery} from "../../../store/services/api.ts";
import {NavLink} from "react-router-dom";

type Props = {
};

const RestaurantTabs: FunctionComponent<Props> = () => {
  const {data:restaurants} = useGetRestaurantsQuery();
  if (!restaurants) {
    return null;
  }

  return (
    <div className={styles.btnContainer}>
      {restaurants.map(({name, id}: { name: string, id: string }) => (
       <NavLink to={`/restaurants/${id}`}>
         { ({isActive}) => <Button key={id}  className={styles.restBtn} isDisabled={isActive}>
          {name}
        </Button>}
       </NavLink>
      ))}

    </div>);
};

export default RestaurantTabs;
