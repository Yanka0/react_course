import {FunctionComponent} from 'react';
import styles from "./restaurantTabs.module.scss";
import Button from "../../../utils/button/Button.tsx";
import {useGetRestaurantsQuery} from "../../../store/services/api.ts";

type Props = {
  onClick: (restaurantIdToRender: string) => void;
};

const RestaurantTabs: FunctionComponent<Props> = ({onClick}) => {
  const {data:restaurants} = useGetRestaurantsQuery();
  if (!restaurants) {
    return null;
  }
console.log()
  return (
    <div className={styles.btnContainer}>
      {restaurants.map(({name, id}: { name: string, id: string }) => (
        <Button key={id} onClick={() => onClick(id)} className={styles.restBtn}>
          {name}
        </Button>
      ))}
    </div>);
};

export default RestaurantTabs;
