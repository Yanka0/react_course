import {FunctionComponent, useState} from 'react';
import {Restaurant, restaurants} from "../../../constants/mock.ts";
import RestaurantItem from "../restaurantItem/RestaurantItem.tsx";
import styles from './restaurantList.module.scss'
import Button from "../../../utils/button/Button.tsx";

interface OwnProps {
}

type Props = OwnProps;

const RestaurantList: FunctionComponent<Props> = () => {
    const [restaurantToRender, setRestaurantToRender] = useState<Restaurant | null>(null)

    return (<div>
        <div className={styles.btnContainer}>
            {restaurants.map((item) => (
                <Button key={item.id} onClick={() => setRestaurantToRender(item)} className={styles.restBtn}>
                    {item.name}
                </Button>
            ))}
        </div>
        <div className={styles.restaurant_list}>{
            restaurantToRender && (
                <RestaurantItem
                    key={restaurantToRender.id}
                    restaurant={restaurantToRender}
                />
            )}
        </div>
    </div>);
};

export default RestaurantList;
