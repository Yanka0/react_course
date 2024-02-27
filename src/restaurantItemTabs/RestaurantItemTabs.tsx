import  {FunctionComponent} from 'react';
import styles from "../components/restaurant/restaurantsTabs/restaurantTabs.module.scss";
import {NavLink, useParams} from "react-router-dom";
import Button from "../utils/button/Button.tsx";


type Props = {
};

const RestaurantItemTabs: FunctionComponent<Props> = () => {
  const {restaurantId} = useParams()
  return (
    <div className={styles.btnContainer}>
      <NavLink to={`/restaurants/${restaurantId}/menu`}>
        {({isActive}) => <Button className={styles.restBtn} isDisabled={isActive}>
          Menu
        </Button>}
      </NavLink>
      <NavLink to={`/restaurants/${restaurantId}/reviews`}>
        {({isActive}) => <Button className={styles.restBtn} isDisabled={isActive}>
          Reviews
        </Button>}
      </NavLink>
    </div>
  );
};

export default RestaurantItemTabs;
