import {FunctionComponent, useState} from 'react';
import ListArray from "../../../utils/listArray/ListArray.tsx";
import {Menu, Restaurant, Review} from "../../../constants/mock.ts";
import styles from './restaurantItem.module.scss'
import Button from "../../../utils/button/Button.tsx";

type Props = {
    restaurant: Restaurant
};


const RestaurantItem: FunctionComponent<Props> = ({restaurant}) => {
    const [counter, setCounter] = useState<{ [key: string]: number }>({});

    function valuePlus(menuItemId: string) {
        setCounter((prevCounter) => ({
            ...prevCounter,
            [menuItemId]: Math.min((prevCounter[menuItemId] || 0) + 1, 5),
        }))
    }

    function valueMinus(menuItemId: string) {
        setCounter((prevCounter) => ({
            ...prevCounter,
            [menuItemId]: Math.max((prevCounter[menuItemId] || 0) - 1, 0),
        }));
    }

    function isMinusDisabled(menuItemId: string): boolean {
        return counter[menuItemId] === 0;
    }

    function isPlusDisabled(menuItemId: string): boolean {
        return counter[menuItemId] === 5;
    }

    return (<div className={styles.restaurant_item}>
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <ListArray<Menu>
                data={restaurant.menu}
                mapFunction={(item: Menu) => <div key={item.id} className={styles.menuContainer}>
                    <div className={styles.menuBtns}>
                        {item.name}
                        <div>
                            <Button children={'+'} onClick={() => valuePlus(item.id)} className={styles.menuBtn}
                                    isDisabled={isPlusDisabled(item.id)}/>
                            {counter[item.id] || 0}
                            <Button children={'-'} onClick={() => valueMinus(item.id)} className={styles.menuBtn}
                                    isDisabled={isMinusDisabled(item.id)}/>
                        </div>
                    </div>
                </div>}
                className={styles.menuList}
            />
            <h3>Reviews</h3>
            <ListArray<Review>
                data={restaurant.reviews}
                mapFunction={(item: Review) => item.text}
                additionalListItemClassName={styles.reviewItem}
                className={styles.reviewList}

            />
        </div>
    </div>);
};

export default RestaurantItem;
