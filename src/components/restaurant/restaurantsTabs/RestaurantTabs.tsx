import {FunctionComponent} from 'react';
import styles from "./restaurantTabs.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useSelector} from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantsWithIds
} from "../../../store/entities/restaurant/selector.tsx";

type Props = {
  onClick: (restaurantIdToRender: string) => void;
};

const RestaurantTabs: FunctionComponent<Props> = ({onClick}) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantsWithIds = useSelector(selectRestaurantsWithIds);

  return (
    <div className={styles.btnContainer}>
      {restaurantIds.map((restaurantId) => (
        <Button key={restaurantId} onClick={() => onClick(restaurantId)} className={styles.restBtn}>
          {restaurantsWithIds[restaurantId].name}
        </Button>
      ))}
    </div>);
};

export default RestaurantTabs;
